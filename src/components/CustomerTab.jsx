// CustomerTab.jsx
import React from 'react';

const CustomerTab = ({ customerInfo, handleCustomerInfoChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="flex flex-col gap-2">
        <label className="font-medium">Customer Name</label>
        <input 
          type="text" 
          name="name" 
          value={customerInfo.name} 
          onChange={handleCustomerInfoChange}
          className="p-2 border rounded"
          placeholder="Enter customer name"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Site Address</label>
        <input 
          type="text" 
          name="address" 
          value={customerInfo.address} 
          onChange={handleCustomerInfoChange}
          className="p-2 border rounded"
          placeholder="Enter site address"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Phone</label>
        <input 
          type="text" 
          name="phone" 
          value={customerInfo.phone} 
          onChange={handleCustomerInfoChange}
          className="p-2 border rounded"
          placeholder="Enter phone number"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Invoice #</label>
        <input 
          type="text" 
          name="invoiceNumber" 
          value={customerInfo.invoiceNumber} 
          onChange={handleCustomerInfoChange}
          className="p-2 border rounded"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Sales Rep</label>
        <input 
          type="text" 
          name="salesRep" 
          value={customerInfo.salesRep} 
          onChange={handleCustomerInfoChange}
          className="p-2 border rounded"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Crew Lead / Contractor Name</label>
        <input 
          type="text" 
          name="crewLead" 
          value={customerInfo.crewLead} 
          onChange={handleCustomerInfoChange}
          className="p-2 border rounded"
          placeholder="Enter crew lead name"
        />
      </div>
    </div>
  );
};

export default CustomerTab;