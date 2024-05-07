// OrderStatusPage.js
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderStatusPage = () => {
    const [processingOrders, setProcessingOrders] = useState([]);

    useEffect(() => {
        axios.get('/orders/processing')
            .then(res => {
                setProcessingOrders(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Processing Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Ordered At</th>
                        {/* Add more columns as needed */
                    /*</tr>
                </thead>
                <tbody>
                    {processingOrders.map(order => (
                        <tr key={order._id}>
                            <td>{order.orderNumber}</td>
                            <td>{order.createdAt}</td>
                            {/* Add more columns as needed */
                      /*  </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderStatusPage;*/
