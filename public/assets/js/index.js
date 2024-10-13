// API Key goes here - DON'T SEND IT TO GITHUB
const API_KEY = 'api_key'

async function main() {
    console.log('main function')
    const today = new Date().toISOString().slice(0, 10);
    console.log('Today is: ', today)
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${today}`)
        .then(response => response.json())
    console.log('respones from NASA API:', response)
    const { url, title, explanation, media_type } = response
    const titleContainer = document.getElementById("title-container");
    const descriptionContainer = document.getElementById("description-container");
    const pictureButton = document.getElementById("check-picture-button");
    const mediaContainer = document.getElementById('media-container');
    titleContainer.textContent = title
    descriptionContainer.textContent = explanation
    pictureButton.href = url

    if (media_type === 'image') {
        mediaContainer.innerHTML = `<img src="${url}" alt="${explanation}" />`;
    } else if (media_type === 'video') {
        mediaContainer.innerHTML = `
            <iframe
                width="560"
                height="315"
                src="${url}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    }

}

main()