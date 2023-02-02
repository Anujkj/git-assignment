var customerRec = nlapiLoadRecord('customer', 45017);
customerRec.setFieldValue('companyname', 'Test akj');

nlapiSubmitRecord(customerRec, true);