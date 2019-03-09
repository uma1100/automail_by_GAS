function myFunction() {
  var spreadsheet = SpreadsheetApp.openById('spreadsheet link');
  var sheet = spreadsheet.getActiveSheet();
  var LastRow = sheet.getLastRow();
  /* ドキュメントから本文を取得する */
  var docTest=DocumentApp.openByUrl("document link"); //ドキュメントをIDで取得
  var text=docTest.getBody().getText(); //ドキュメントの内容を取得
  var data_array = sheet.getRange(LastRow,2,1,5).getValues();
  //Logger.log(data_array);
  var to = data_array[0][0];
  var name = data_array[0][1];
  var event_name = data_array[0][2];
  var party = data_array[0][3];
  var body = text.replace("#名前#",name).replace("#説明会#",event_name).replace("#Answer#",party);
  //Logger.log(body);
  MailApp.sendEmail(to, '説明会の参加確認', body);
}
