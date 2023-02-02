var invoice = nlapiTransformRecord('salesorder', 135540, 'invoice');
invoice.removeLineItem('item',2);
nlapiSubmitRecord(invoice);
