
window.addEventListener("DOMContentLoaded", event => {
    
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const twitterBtn = document.getElementById('twitter');
    const newQuoteBtn = document.getElementById('new-quote');
    
    async function getQuote() {
        let randomNumber = Math.floor(Math.random() * 11)
        const apiUrl = 'https://type.fit/api/quotes';
        try {
            const response = await fetch(apiUrl);
            const data = await response.json()
    
            quoteText.innerTEXT = data[randomNumber].text
            authorText.innerTEXT = data[randomNumber].author
            console.log(data[randomNumber])
            
        } catch (error) {
            console.log('Could not get quote', error);
        }
    }
    
    //get quote on load
    
    newQuoteBtn.addEventListener('click', event => {
        
        getQuote()
    })
    
})
// get quote from api
