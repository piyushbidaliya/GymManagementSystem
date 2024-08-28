import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const BillReceipts = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const querySnapshot = await getDocs(collection(db, "invoices"));
      const invoicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInvoices(invoicesData);
    };

    fetchInvoices();
  }, []);

  const handleDownload = (invoice) => {
    const invoiceData = JSON.stringify(invoice, null, 2);
    const blob = new Blob([invoiceData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `invoice-${invoice.invoiceNumber}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      try {
        await deleteDoc(doc(db, 'invoices', id));
        setInvoices(invoices.filter(invoice => invoice.id !== id));
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Invoices</h1>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id} className="mb-4 p-4 border rounded-lg shadow">
            <p>Invoice #: {invoice.invoiceNumber}</p>
            <p>Date: {invoice.date}</p>
            <p>Total: ${invoice.total.toFixed(2)}</p>
            <p>Amount Paid: ${invoice.amountPaid.toFixed(2)}</p>
            <p>Balance Due: ${invoice.balanceDue.toFixed(2)}</p>
            <ul>
              {invoice.rows.map((row, index) => (
                <li key={index}>
                  {row.item} - {row.description} - ${row.rate} x {row.quantity} = ${row.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button
                onClick={() => handleDownload(invoice)}
                className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Download
              </button>
              <button
                onClick={() => handleDelete(invoice.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillReceipts;
