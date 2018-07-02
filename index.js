var mammoth = require("mammoth");

var fs = require('fs');
 
mammoth.convertToHtml({path: "./test.docx"})
.then(function(result){

var html = result.value; // The generated HTML
var messages = result.messages; // Any messages, such as warnings during conversion
var templete = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	${html}
</body>
</html>;
`
	
	fs.writeFile('./test.html', templete, 'utf-8', function (err) {

        if (err) {
            console.log(err);
        }

        console.log('wirte end..........')

    });

	var name = new Date().getTime();
	var str = 'var data_'+name+'= ' + '\''+ html + '\'';

    fs.writeFile('./'+name+'.js', str, 'utf-8', function (err) {

        if (err) {
            console.log(err);
        }

        console.log('wirte end..........')

    });
	


})
.done();