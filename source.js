let h1 = document.getElementsByTagName('h1')[0]
let planetsList = document.querySelectorAll('#planets-list')
let [moon, mars, eurpa, titan] = planetsList[0].children

console.log(moon.innerHTML)
console.log(planetsList[0].children)

fetchData()


function fetchData(e) {

    fetch('data.json')
        .then(response => response.json())
        .then((data) => {

            data.destinations.forEach(destination => {
                let name = destination.name

                if(destination.name === 'Moon') {
                    moon.innerHTML = destination.name
                } else if(destination.name === 'Mars') {
                    mars.innerHTML = destination.name
                } else if(destination.name === 'Europa') {
                    eurpa.innerHTML = destination.name
                } else if (destination.name = 'Titan') {
                    titan.innerHTML = destination.name
                }



                console.log(destination)
                console.log(name)

            })


        })


}