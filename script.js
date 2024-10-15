var container = document.getElementById("tudo")
var title = document.getElementById("title")
function play(){
    container.innerHTML = ""
    container.innerHTML = "<header id='title'><h1>Memória da Turminha</h1></header> <table> <tr> <td align='center'>    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center'>    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center'>    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> </tr> <tr> <td align='center'>    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center'>    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center'>    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> </tr> <tr> <td align='center'>    <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center'>   <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> <td align='center'>   <img src='./img/Set_vertical.webp' alt='' class='yuguio' onclick='virar()'> </td> </tr>"
}
function virar(){
    container.innerHTML = ""
}