function myFunction() {
  var spreadsheet = SpreadsheetApp.openById('Spread Sheet ID');
  var sheet = spreadsheet.getActiveSheet();
  var LastRow = sheet.getLastRow();
  
  var mailaddress = sheet.getRange(2, 2, LastRow-1).getValues(); // set mailaddress position
  mailaddress = mailaddress.join(',');
  
  sheet.getRange(4, 10).setValue(mailaddress);
}
