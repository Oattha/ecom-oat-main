import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderDetail = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`/api/orders/${orderId}`).then((res) => {
      setOrder(res.data);
    });
  }, [orderId]);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h2>รายละเอียดออเดอร์ #{order.id}</h2>
      <p>ชื่อผู้สั่ง: {order.customerName}</p>
      <p>ที่อยู่: {order.address}</p>
      <p>เบอร์โทร: {order.phone}</p>

      <h3>สินค้าในออเดอร์</h3>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} ชิ้น
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetail;
