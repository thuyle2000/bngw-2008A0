print("This is jjs test case");
var x = 10;
var y = 20;
var z  = x+y;
var s = x + " + " + y + " = " + z;
print(s);

var data = [1,3,5,7,9,11];
var sum = data.reduce(function(x,y){x+y},0);
print('sum: '+ sum)