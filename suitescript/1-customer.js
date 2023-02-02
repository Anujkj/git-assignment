var customerRecord = nlapiCreateRecord('customer');
customerRecord.setFieldValue('companyname', 'abc company');
customerRecord.setFieldValue('subsidiary', 1);

nlapiSubmitRecord(customerRecord, true); 