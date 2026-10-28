let name = localStorage.getItem("studentName");

let books = JSON.parse(
    localStorage.getItem("books")
);

let result =
 "Name: " + name + "<br><br>" +
             "Books:<br>";

for (let i = 0; i < books.length; i++) 
{
    result += books[i] + "<br>";
}

let total = books.length * 200;

result += "<br>Total Deposit: " + total + " Taka";

document.getElementById("receipt").innerHTML = result;

function goBack() 
{
    window.location.href = "index.html";
}
