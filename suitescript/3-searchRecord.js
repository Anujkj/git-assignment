var searchFilter = new nlobjSearchFilter('companyname', null, 'is', 'Test akj' );
var searchColumns = [
  new nlobjSearchColumn('internalid'),
  new nlobjSearchColumn('companyname')
];

var searchResults = nlapiSearchRecord('customer', null, searchFilter, searchColumns);

var result = searchResults[0];
var internalId = result.getValue('internalid');
var companyName = result.getValue('companyname');
nlapiLogExecution('DEBUG', 'Search Result', 'Internal ID: ' + internalId + ', Company Name: ' + companyName);