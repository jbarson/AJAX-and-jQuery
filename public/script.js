// console.log('Hello Nurse')

const JOKE_URL = 'https://icanhazdadjoke.com/'

const $button = $('.generateJoke')

const $list = $('.jokeList')

const $jokeForm = $('.addJoke')

// console.log($button)
// console.log($list)

const getJoke = () => {
    if ($('.joke').length > 5) return
    // $.ajax({
    //     method: "GET",
    //     dataType: "json",
    //     url: JOKE_URL,
    //     // success: joke => console.log(joke),
    //     success: data => buildJoke(data.joke),
    //     error: err => console.log('no joke for you', err)
    // })
    // This is simpler
    // $.getJSON(JOKE_URL)
    //     .then(data => buildJoke(data.joke) )
    //     .catch(() => buildJoke('no joke for you today!'))
    // Using fetch interface
    fetch(JOKE_URL, {headers: {
        accept: 'application/json'
    }})
        .then(response => response.json())
        .then(data => buildJoke(data.joke) )
        .catch(() => buildJoke('no joke for you today!'))
}

const buildJoke = (joke) => {
    // if ($('.joke').length > 5) return
    $(`<p class="joke">${joke}</p>`)
        // .appendTo($list)
        .prependTo($list)
}

getJoke()

$button.on('click', getJoke)

$jokeForm.on('submit', function(event) {
    event.preventDefault()
    const serializedData = $(this).serialize()
    console.log(serializedData)
    $.post('api', serializedData)
        .then(data => console.log(data))
    this.reset()
})