var container = document.getElementById("tudo")
var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var d = document.getElementById("d")
var e = document.getElementById("e")
var f = document.getElementById("f")
var g = document.getElementById("g")
var h = document.getElementById("h")
var i = document.getElementById("i")
function play(){
    container.innerHTML = ""
    container.innerHTML = "<header id='title'><h1>Memória da Turminha</h1></header> <table> <tr> <td align='center' padding='50px' id='a' >    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center' padding='50px' id='b' >    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center' padding='50px' id='c' >    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> </tr> <tr> <td align='center' padding='50px' id='d' >    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center' padding='50px' id='e' >    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center' padding='50px' id='f' >    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> </tr><tr> <td align='center' padding='50px' id='g' >    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center' padding='50px' id='h' >    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center' padding='50px' id='i' >   <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> </tr>"
}
function virar(){
    container.innerHTML = "<td align='center' padding='50px' class='meme' >    <img src='./img/tapete.png' alt='' class='yuguio' onclick='virar()'> </td>"
}