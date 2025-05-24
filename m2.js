function run() {
    let htmlCode = document.getElementById('html-code').value;
    let cssCode = document.getElementById('css-code').value;
    let jsCode = document.getElementById('javascript-code').value;
    let output = document.getElementById('output').contentWindow.document;

    output.open();
    output.writeln(htmlCode + "<style>" + cssCode + "</style>" + "<script>" + jsCode + "</script>");
    output.close();
}