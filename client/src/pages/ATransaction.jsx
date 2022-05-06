import React from 'react';
import Navbar from '../components/navbar/Navbar';

export default function ATransaction() {
  return (
    <div className="bg-homes">
      <Navbar />
      <div className=" container table-w mb-5 ">
        <h3>Incoming Transaction</h3>
      </div>
      <div className="container overflow-auto table-responsive ">
        <table className="w-75 m-auto table table-hover">
          <thead>
            <tr className="text-danger">
              <th>No</th>
              <th>Users</th>
              <th>Evidence of Transfer</th>
              <th>Product Purchased</th>
              <th>Total Payment</th>
              <th>Status Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Radif</td>
              <td className="text-info">bca.jpg</td>
              <td>My Own Private Mr. Cool</td>
              <td>Rp. 75.000</td>
              <td>Approve</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Radif</td>
              <td>bca.jpg</td>
              <td>My Own Private Mr. Cool</td>
              <td>Rp. 75.000</td>
              <td>Approve</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
