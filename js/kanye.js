function loadQuote(){
    fetch('https://api.kanye.rest/')
    .then(Response => Response.json())
    .then(data => displayQuote(data))
}
loadQuote();

function displayQuote(quote){
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = quote.quote;
}