import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase'; // Adjust the path if necessary
import logo from '../assets/logo.svg'

const CreateBill = () => {
  const [rows, setRows] = useState([
    { item: 'Front End Consultation', description: 'Experience Review', rate: 150.00, quantity: 4, price: 600.00 }
  ]);

  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '101138',
    date: 'January 1, 2012',
    amountPaid: 0.00,
  });

  const handleInputChange = (e, rowIndex, key) => {
    const value = e.target.value;
    if (rowIndex !== undefined) {
      const updatedRows = [...rows];
      updatedRows[rowIndex][key] = value;
      if (key === 'rate' || key === 'quantity') {
        updatedRows[rowIndex].price = updatedRows[rowIndex].rate * updatedRows[rowIndex].quantity;
      }
      setRows(updatedRows);
    } else {
      setInvoiceData({ ...invoiceData, [key]: value });
    }
  };

  const handleAddRow = () => {
    setRows([...rows, { item: '', description: '', rate: 0.00, quantity: 0, price: 0.00 }]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const calculateTotal = () => {
    return rows.reduce((total, row) => total + row.price, 0);
  };

  const calculateBalanceDue = () => {
    return calculateTotal() - parseFloat(invoiceData.amountPaid);
  };

  const handleSendInvoice = async () => {
    const invoice = {
      ...invoiceData,
      rows,
      total: calculateTotal(),
      balanceDue: calculateBalanceDue(),
    };

    try {
      const docRef = await addDoc(collection(db, "invoices"), invoice);
      alert("Invoice sent with ID: " + docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="container mx-auto shadow-lg w-full px-6 pb-1 lg:px-20 relative top-10 xs:top-20 h-fit">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Invoice</h1>
          <address contentEditable className="text-sm">
            <p>Jonathan Neal</p>
            <p>101 E. Chapman Ave<br />Orange, CA 92866</p>
            <p>(800) 555-1234</p>
          </address>
        </div>
        <div>
          <input type="file" accept="image/*" className="hidden" />
          <img src={logo} alt="Logo" className="w-32" />
        </div>
      </header>
      
      <article className="">
        <h1 className="text-lg font-bold">Recipient</h1>
        <address contentEditable className="text-sm">
          <p>Some Company<br />c/o Some Guy</p>
        </address>
        <table className="table-auto">
          <tbody>
            <tr>
              <th className="text-left">Invoice #</th>
              <td className=""><input type="text" value={invoiceData.invoiceNumber} onChange={(e) => handleInputChange(e, undefined, 'invoiceNumber')} className="w-full" /></td>
            </tr>
            <tr>
              <th className="text-left">Date</th>
              <td className=""><input type="text" value={invoiceData.date} onChange={(e) => handleInputChange(e, undefined, 'date')} className="w-full" /></td>
            </tr>
            <tr>
              <th className="text-left">Amount Due</th>
              <td className="">${calculateTotal().toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left">Item</th>
              <th className="text-left">Description</th>
              <th className="text-right">Rate</th>
              <th className="text-right">Quantity</th>
              <th className="text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="">
                  <input
                    type="text"
                    value={row.item}
                    onChange={(e) => handleInputChange(e, index, 'item')}
                    className="w-full"
                  />
                </td>
                <td className="">
                  <input
                    type="text"
                    value={row.description}
                    onChange={(e) => handleInputChange(e, index, 'description')}
                    className="w-full"
                  />
                </td>
                <td className="text-right">
                  <input
                    type="number"
                    value={row.rate}
                    onChange={(e) => handleInputChange(e, index, 'rate')}
                    className="w-full text-right"
                  />
                </td>
                <td className="text-right">
                  <input
                    type="number"
                    value={row.quantity}
                    onChange={(e) => handleInputChange(e, index, 'quantity')}
                    className="w-full text-right"
                  />
                </td>
                <td className="text-right">${row.price.toFixed(2)}</td>
                <td className="">
                  <button onClick={() => handleRemoveRow(index)} className="text-red-500">-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddRow} className="text-blue-500">Add Item</button>

        <table className="table-auto w-full">
          <tbody>
            <tr>
              <th className="text-left">Total</th>
              <td className="text-right">${calculateTotal().toFixed(2)}</td>
            </tr>
            <tr>
              <th className="text-left">Amount Paid</th>
              <td className="">
                <input
                  type="number"
                  value={invoiceData.amountPaid}
                  onChange={(e) => handleInputChange(e, undefined, 'amountPaid')}
                  className="w-full text-right"
                />
              </td>
            </tr>
            <tr>
              <th className="text-left">Balance Due</th>
              <td className="text-right">${calculateBalanceDue().toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </article>
      <button
        onClick={handleSendInvoice}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Send Invoice
      </button>
    </div>
  );
};

export default CreateBill;
