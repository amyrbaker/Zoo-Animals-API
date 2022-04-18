//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://zoo-animal-api.herokuapp.com/animals/rand`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data.name
        document.querySelector('img').src = data.image_link
        document.querySelector('h3').innerHTML = `The ${data.name.toLowerCase()} is a ${data.animal_type.toLowerCase()} that lives in the ${data.habitat.toLowerCase()}. It can weigh between ${data.weight_min} and ${data.weight_max} lbs and eats a diet of ${data.diet.toLowerCase()}.`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

