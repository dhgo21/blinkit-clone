import "./Myorders.css";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";

function Myorders() {
  const orders = useSelector((state) => state.slice.orders);
  const location = useLocation();

  // If path is /account/myorders/orderinfo then render Outlet
  if (location.pathname === "/account/myorders/orderinfo") {
    return <Outlet />;
  }

  return (
    <>
      {orders && orders.length > 0 ? (
        <div className="myordersection">
          {orders.map((order, index) => {
            const orderItems = order.items;
            const orderTotal = orderItems.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            );
            const gtotal = orderTotal + 10;
            const { formatted, timeIST } = order.orderTime;

            return (
              <Link
                key={index}
                to="orderinfo"
                state={{
                  orderItems,
                  orderTotal,
                  gtotal,
                  formatted,
                  timeIST,
                }}
                id="linkorederinfo"
              >
                <div className="myorders">
                  <div className="orders">
                    <div className="order-arrived">
                      <div className="tick-icon">
                        <TiTick id="t" />
                      </div>
                      <div className="blockbbb">
                        <div className="timee">
                          <p id="arrivedhead">Arrived in 10 minutes</p>
                          <p id="amount-time">
                            ₹{gtotal} • {formatted}, {timeIST}
                          </p>
                        </div>
                        <div className="rightarrow">
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>
                    <div className="order-images">
                      {orderItems.map((item, idx) => (
                        <div key={idx} className="single-order-product">
                          <img id="proo-img" src={item.image} alt={item.title} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="emptymyoders">
          <div className="empty-image">
            <img id="empty-logo" src="/images/empty-order.webp" alt="no-orders" />
          </div>
        </div>
      )}
    </>
  );
}

export default Myorders;
