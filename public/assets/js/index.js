// API Key goes here - DON'T SEND IT TO GITHUB
const API_KEY = 'api_key'

function main() {
    console.log('main function')
    const today = new Date().toISOString().slice(0, 10);
    console.log('Today is: ', today)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${today}`)
        .then(response => response.json())
        .then(data => console.log(data));
}

main()