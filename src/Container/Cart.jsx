import React from "react";
import { useSelector } from "react-redux";
import { menuPhoto } from "../Links/Contants";
import "./Cart.css";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { clearCart, removeItem, addItem, clearItem } from "../Links/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.removeItem("cartItems"); // Assuming you store cart items here
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleClearItam = (item) => {
    dispatch(clearItem(item));
  };


  const totalPrice = cartItems.reduce((sum, item) => {
    return (
      sum +
      ((item?.card?.info?.price
        ? item.card.info.price
        : item?.card?.info?.defaultPrice || 0) /
        100) *
        (item.quantity || 1)
    );
  }, 0);

  return (
    <div>
      <Header />
      <div className="cart-page-container">
        <div className="cart-main-container">
          {/* Main Cart Section (Left) */}
          <div className="cart-container">
            <div className="cart-header">
              <h1 className="cart-title">Your Cart</h1>

              {cartItems.length > 0 && (
                <button className="clear-cart-btn" onClick={handleClearCart}>
                  Clear Cart ❌
                </button>
              )}
            </div>
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p className="empty-message">Your cart is empty</p>
                <p className="empty-submessage">
                  Add some delicious items to get started!
                </p>
              </div>
            ) : (
              <div className="items-list">
                {cartItems.map((item) => {
                  const price = item?.card?.info?.price
                    ? item.card.info.price
                    : item?.card?.info?.defaultPrice || 0;
                  return (
                    <div key={item?.card?.info?.id} className="cart-item">
                      {item?.card?.info?.imageId && (
                        <img
                          src={menuPhoto + item.card.info.imageId}
                          alt={item?.card?.info?.name}
                          className="item-image"
                        />
                      )}
                      <div className="item-details">
                        <div className="item-name-container flex justify-between">
                          <h2 className="item-name">
                            {item?.card?.info?.name}
                          </h2>
                        </div>
                        <p className="item-price">
                          ₹{(price / 100).toFixed(2)}
                        </p>
                        {item?.card?.info?.description && (
                          <p className="item-description">
                            {item.card.info.description}
                          </p>
                        )}
                      </div>
                      <div className="item-controls">
                        <button
                          className="remove-item-btn"
                          onClick={() => handleClearItam(item)}
                        >
                          ❌
                        </button>
                        <div className="item-quantity">
                          <button
                            id="quantity-remove"
                            onClick={() => handleRemoveItem(item)}
                          >
                            -
                          </button>
                          <button className="quantity-btn">
                            {item?.quantity || 1}
                          </button>
                          <button
                            id="quantity-add"
                            onClick={() => handleAddItem(item)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Total Bill Section (Right) */}
          {cartItems.length > 0 && (
            <div className="order-summary">
              <h1 className="cart-title">Order Summary</h1>
              <hr />

              <div className="summary-items">
                {cartItems.map((item) => {
                  const price = item?.card?.info?.price
                    ? item.card.info.price
                    : item?.card?.info?.defaultPrice || 0;
                  return (
                    <div
                      key={`summary-${item?.card?.info?.id}`}
                      className="summary-item"
                    >
                      <div className="summary-item-name">
                        <span>{item?.card?.info?.name}</span>
                        <span>×{item?.quantity || 1}</span>
                      </div>
                      <div className="summary-item-price">
                        ₹{((price / 100) * (item.quantity || 1)).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>

              <hr />

              <div className="checkout-section">
                <div className="total-price">
                  <span>Total:</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <button className="checkout-btn" >
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;