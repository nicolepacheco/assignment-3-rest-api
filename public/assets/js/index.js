// API Key goes here - DON'T SEND IT TO GITHUB
const API_KEY = 'api_key'

function main() {
    console.log('main function')
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`)
        .then(response => response.json())
        .then(data => console.log(data));
}

main()