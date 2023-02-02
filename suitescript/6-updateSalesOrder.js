var salesorder = nlapiLoadRecord('salesorder', 135540);
var item = salesorder.getLineItemValue('item', 'quantity',2);
salesorder.setLineItemValue('item', 'quantity', 2, 5);
salesorder.setLineItemValue('item', 'amount', 2, 1250);
nlapiSubmitRecord(salesorder);