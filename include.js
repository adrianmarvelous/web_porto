
fetch("templates/about.html")
.then(response => response.text())
.then(data => {
  // Insert the received content into the "includedContent" div
  document.getElementById("includedContent").innerHTML = data;
})
.catch(error => {
  console.error('Error fetching the HTML file:', error);
});