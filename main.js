sheetId = "1_BlmEIzj9PHMkKceLILv7pM2YOgHLWMdL8RnDwN5o0c"
const sheetLink = 'https://docs.google.com/spreadsheets/d/'+sheetId+'/gviz/tq?tqx=out:json&tq&gid=0'

function fetchSheetData() {
    return fetch(sheetLink)
        .then(response => response.text())
        .then(data => {
            document.querySelector("#output").textContent = data;
            return data; // Return the data for further use
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Rethrow to handle it in the calling function
        });
}

// Run the fetch operation
fetchSheetData();
    