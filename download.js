document.getElementById("downloadgame").addEventListener("click", function() {
    var url = "Gioco.rar";
    
    var hiddenElement = document.createElement('a');
    hiddenElement.href = url;
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Gioco.rar'; 
    hiddenElement.click();
});