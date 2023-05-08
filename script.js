// RETORNA A DATA

let data = new Date ()
document.write(data)
document.write("<br><br>");

// Retorna a Data Padrão Americano
let data1 = new Date ()
document.write(data1. toDateString());
document.write("<br><br>")

// Retorna a Data Padrão de Navegador
let data2 = new Date ()
document.write(data2.toLocaleDateString());
document.write("<br><br>");

// Retorna a Data com Array
let data3 = new Date ()
let diaSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']
document.write(diaSemana[data3.getDay()]);
document.write("<br><br>");

//Horas
let hour = new Date ()
document.write(hour.getHours());
document.write("<br><br>")
hour.setHours(hour.getHours() + 2);
document.write(hour.getHours());
document.write("<br><br>")
