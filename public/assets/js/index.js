// API Key goes here - DON'T SEND IT TO GITHUB
const API_KEY = 'api_key'

const today = new Date().toISOString().slice(0, 10);
let chooseDate = today

function handleDateChange(e) {
    console.log(e.target.value)
    const loadingContainer = document.getElementById("loading-container");
    const responseContainer = document.getElementById("response-container");
    loadingContainer.innerHTML = `
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `
    responseContainer.innerHTML = `
        <h1 id="title-container"></h1>
        <div id="media-container"></div>
        <p id="description-container" class="lead"></p>
        <p class="lead">
          <a id="check-picture-button" href="" target="_blank"
            class="btn btn-lg btn-light fw-bold border-white bg-white">Click here to
            see the
            image or video</a>
        </p>
    `
    chooseDate = e.target.value
    main()
}

async function main() {
    console.log('main function')
    console.log('Today is: ', today)
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${chooseDate}`)
        .then(response => response.json())
    console.log('respones from NASA API:', response)
    const { url, title, explanation, media_type } = response
    const titleContainer = document.getElementById("title-container");
    const descriptionContainer = document.getElementById("description-container");
    const pictureButton = document.getElementById("check-picture-button");
    const mediaContainer = document.getElementById('media-container');
    titleContainer.textContent = `${today} - ${title}`
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

    const chooseDateContainer = document.getElementById('choose-date-container');
    chooseDateContainer.innerHTML = `
        <h2 for="pic-date">Choose a date:</h2>
        <h2>
            <input
                type="date"
                id="pic-date"
                name="pic-date"
                value="${chooseDate}"
                min="1995-06-16"
                max="${today}"
                onchange="handleDateChange(event)" />
        </h2>
    `;

    const loadingContainer = document.getElementById("loading-container");
    loadingContainer.innerHTML = ''
}

main()