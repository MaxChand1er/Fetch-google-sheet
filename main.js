sheetId = "1_BlmEIzj9PHMkKceLILv7pM2YOgHLWMdL8RnDwN5o0c"
const sheetLink = 'https://docs.google.com/spreadsheets/d/'+sheetId+'/gviz/tq?tqx=out:json&tq&gid=0'
fetch(sheetLink)
    .then(response => response.text())
    .then(data => document.querySelector("#output").textContent = data)
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });

