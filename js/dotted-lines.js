
// lines array
var lines = [
  // 'border-color:green; transform:rotate(100deg); width:1500px; left:39%;',
  // 'border-color:red; transform:rotate(18deg); width:1500px;',
  // 'border-color:blue; transform:rotate(45deg); width:1500px; right:30%;',
  // 'border-color:purple; transform:rotate(65deg); width:1500px;',
  // 'border-color:orange; transform:rotate(135deg); width:1500px; right:26%;',
  // 'border-color:green; transform:rotate(150deg); width:1500px; left:14%;',
  // 'border-color:pink; transform:rotate(230deg); width:1500px; left:14%;',
  // 'border-color:purple; transform:rotate(107deg); width:1500px; left:14%;',
  // 'border-color:blue; transform:rotate(125deg); width:1500px;  right: 11%;',    
];


// draw lines
linesFromArray(lines);


function drawLine(str) {
  var hr = document.createElement('hr')
  hr.style = str + 'opacity:0.1; position:absolute; border-style:dashed; border-width:5px;';
  document.body.getElementsByClassName('top-content')[0].appendChild(hr);
}

// call drawLine over each line in the lines array
function linesFromArray(arr) {
  for (var i=0; i<arr.length; i++) {
    drawLine(arr[i]);
  }
}