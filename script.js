const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const genQuoteButton = document.getElementById("newQuoteGenButton");
const copyButton = document.getElementById("copyButton");

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

document.addEventListener("DOMContentLoaded", ()=>{
    getQuote(api_url);
})

genQuoteButton.addEventListener("click", ()=>{
    getQuote(api_url);
});

copyButton.addEventListener("click", () => {
    const textToCopy = `${quote.innerText} - ${author.innerText}`;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            copyButton.innerHTML = '<i class="fa fa-copy"></i>Copied';
            setTimeout(() => {
                copyButton.innerHTML = '<i class="fa fa-copy"></i>Copy';
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy quote: ', err);
        });
});
