document.getElementById("downloadgame").addEventListener("click", function() {
    var url = "Gioco.zip";
    
    var hiddenElement = document.createElement('a');
    hiddenElement.href = url;
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Gioco.zip'; 
    hiddenElement.click();
});