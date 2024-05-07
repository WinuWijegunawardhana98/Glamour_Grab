// OrdersHistoryPage.js
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersHistoryPage = () => {
    const [completedOrders, setCompletedOrders] = useState([]);

    useEffect(() => {
        axios.get('/orders/completed')
            .then(res => {
                setCompletedOrders(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Completed Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Completed At</th>
                        {/* Add more columns as needed */
            /*        </tr>
                </thead>
                <tbody>
                    {completedOrders.map(order => (
                        <tr key={order._id}>
                            <td>{order.orderNumber}</td>
                            <td>{order.completedAt}</td>
                            {/* Add more columns as needed */
                            
                  /*      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersHistoryPage;*/
