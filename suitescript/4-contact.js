var contact = nlapiCreateRecord("contact");

contact.setFieldValue("firstname", "abc");
contact.setFieldValue("middlename", "mn");
contact.setFieldValue("lastname", "xyz");
contact.setFieldValue("email", "abc@xyz.com");
contact.setFieldValue("officephone", "123456789");
contact.setFieldValue('subsidiary', 1);
contact.setFieldValue('company', 45017);
nlapiSubmitRecord(contact, true);