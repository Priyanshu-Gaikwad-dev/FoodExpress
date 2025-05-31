import "./App.css";
import { Link, useLocation } from "react-router";
import Card from "./Card";
import Header from "./Header";
import Shimmer from "./Shimmer";
import React, { useEffect } from "react";
import useOnlineStatus from "./useOnlineStatus";
import useContainer from "./useContainer";
import { useState } from "react";
import BannerSlider from "./BannerSlider";

function Container() {
  const {
    filteredData,
    setFilteredData,
    allData,
    setAllData,
    newFData,
    setnewFData,
  } = useContainer();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setFilteredData(allData);
      setnewFData(allData);
    }
  }, [location.key, location.pathname, allData, setFilteredData, setnewFData]);

  const onlineStatus = useOnlineStatus();

  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    fetch("https://6788e5b22c874e66b7d6c2da.mockapi.io/contact")
      .then((res) => res.json())
      .then((data) => setBannerData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!onlineStatus) {
    return (
      <div>
        <h1>Offline</h1>
      </div>
    );
  }

  return filteredData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <Header
        filteredData={allData}
        setFilteredData={setFilteredData}
        setnewFData={setnewFData}
      />

      <div id="filter">
        <button
          onClick={() => {
            const topRated = allData.filter(
              (item) => item.info.avgRating > 4.5
            );
            setnewFData(topRated);
          }}
        >
          TOP RATING
        </button>

        <button
          onClick={() => {
            const lowRated = allData.filter(
              (item) => item.info.avgRating <= 4.5
            );
            setnewFData(lowRated);
          }}
        >
          LOW RATING
        </button>

        <button onClick={() => setnewFData(allData)}>RESET</button>
      </div>

      <div className="comments-section">
        <h1 className="section-title">Comments from Customers</h1>
        <BannerSlider data={bannerData} />
      </div>

      <div id="new">
        {newFData.map((item) => (
          <Link
            key={item.info.id}
            id="OK"
            to={"/Restaurants-Menu/" + item.info.id}
          >
            <Card newData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Container;
