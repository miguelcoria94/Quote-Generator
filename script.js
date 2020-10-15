
window.addEventListener("DOMContentLoaded", event => {
    
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const twitterBtn = document.getElementById('twitter');
    const newQuoteBtn = document.getElementById('new-quote');
    const loader = document.getElementById('loader');
    loader.hidden = true;
    function showLoading() {
        loader.hidden = false;
        quoteContainer.hidden = true;
    }

    function doneLoading() {
        if (!loader.hidden) {
            quoteContainer.hidden = false;
            loader.hidden = true;
        }
    }
    
    async function getQuote() {
        showLoading()
        let largeInt = Math.floor(Math.random() * 80)
        const apiUrl = 'https://type.fit/api/quotes';
        try {
            const response = await fetch(apiUrl);
            const data = await response.json()
            if (data[largeInt].author === "") {
                authorText.innerHTML = "Unknown"
            }
            quoteText.innerHTML = data[largeInt].text
            authorText.innerHTML = data[largeInt].author

            doneLoading();
        } catch (error) {
            console.log('Could not get quote', error);
        }
    }


    function tweetQuote() {
        const quote = quoteText.innerHTML;
        const author = authorText.innerHTML;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
        window.open(twitterUrl, '_blank');
    }

    newQuoteBtn.addEventListener('click', event => {
        getQuote();
    })

    twitterBtn.addEventListener('click', event => {
        tweetQuote();
    })
})
