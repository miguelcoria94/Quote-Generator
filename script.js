
window.addEventListener("DOMContentLoaded", event => {
    
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const twitterBtn = document.getElementById('twitter');
    const newQuoteBtn = document.getElementById('new-quote');
    
    async function getQuote() {
        //the free api was down, but I found this one
        let largeInt = Math.floor(Math.random() * 80)
        const apiUrl = 'https://type.fit/api/quotes';
        try {
            const response = await fetch(apiUrl);
            const data = await response.json()
    
            quoteText.innerHTML = data[largeInt].text
            authorText.innerHTML = data[largeInt].author
            
        } catch (error) {
            console.log('Could not get quote', error);
        }
    }

    //listen for button click
    newQuoteBtn.addEventListener('click', event => {
        getQuote()
    })
})
