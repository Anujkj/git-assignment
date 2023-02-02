var salesorder = nlapiCreateRecord("salesorder");

salesorder.setFieldValue('entity',45017);

salesorder.insertLineItem('item',1);
salesorder.setLineItemValue('item','item',1,7270);
salesorder.setLineItemValue('item','quantity',1,1);
salesorder.setLineItemValue('item', 'amount',1,250);

salesorder.insertLineItem('item',2);
salesorder.setLineItemValue('item','item',2,7178);
salesorder.setLineItemValue('item','quantity',2,2);
salesorder.setLineItemValue('item','amount',2,250);

nlapiSubmitRecord(salesorder);