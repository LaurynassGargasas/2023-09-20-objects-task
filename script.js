let cities = [
    {
        name: 'Vilnius',
        population: 587581,
        location: {
            continent: 'Europa',
            country: 'Lietuva'
        },
        touristAttractions: ['Senamiestis', 'Gedimino bokštas', 'Trakų pilis', 'Antakalnis'],
        isCapital: true
    },
    {
        name: "London",
        population: 8982000,
        location: {
          continent: "Europa",
          country: "Jungtinė Karalystė"
        },
        touristAttractions: ["Big Ben"],
        isCapital: true
    },
    {
        name: "Paris",
        population: 2140526,
        location: {
          continent: "Europa",
          country: "Prancūzija"
        },
        touristAttractions: ["Eifelio bokštas", "Louvre muziejus", "Notre-Dame katedra"],
        isCapital: true
    },
    {
        name: "New York",
        population: 8398748,
        location: {
          continent: "Šiaurės Amerika",
          country: "JAV"
        },
        touristAttractions: ["Statue of Liberty", "Central Park", "Times Square", 'University'],
        isCapital: false
    },
    {
        name: "Sydney",
        population: 5230330,
        location: {
          continent: "Australija",
          country: "Australija"
        },
        touristAttractions: ["Opera House", "Sydney Harbour Bridge", "Bondi Beach"],
        isCapital: false
    },
    {
        name: "Roma",
        population: 2870528,
        location: {
          continent: "Europa",
          country: "Italija"
        },
        touristAttractions: ["Koliziejus", "Forum Romanum", "Peters Bazilika"],
        isCapital: true
    },
    {
        name: "Pekinas",
        population: 21542000,
        location: {
          continent: "Azija",
          country: "Kinija"
        },
        touristAttractions: ["Žiemos rūmai", "Kinijos sienos", "Pagoda"],
        isCapital: true
    },
    {
        name: "Rio de Janeiro",
        population: 6718903,
        location: {
          continent: "Šiaurės Amerika",
          country: "Brazilija"
        },
        touristAttractions: ["Kristus Atsiskyrėlis", "Copacabana pliažas", "Marakana stadionas"],
        isCapital: false
    },
    {
        name: "Dubajus",
        population: 3113241,
        location: {
          continent: "Azija",
          country: "Jungtiniai Arabų Emiratai"
        },
        touristAttractions: [],
        isCapital: false
    },
    {
        name: "Tokijas",
        population: 37435191,
        location: {
          continent: "Azija",
          country: "Japonija"
        },
        touristAttractions: ["Šinto šventykla", "Tokijos bokštas", "Akasaka dvaras"],
        isCapital: true
    }
]

let onlyDiv = document.querySelector('div')
onlyDiv.style.display = 'flex'
onlyDiv.style.flexWrap = 'wrap'

for(let i = 0; i < cities.length; i++){
    console.log(cities[i])
    console.log(cities[i].name)
    console.log(cities[i].population)
    console.log(cities[i].location.continent)
    console.log(cities[i].location.country)
    console.log(cities[i].isCapital)
    console.log(cities[i].touristAttractions)

    let box = document.createElement('div')
    box.style.width = '50%'
    if(i === cities.length - 1 && cities.length % 2 !== 0){
        box.style.width = '100%'
    }
    onlyDiv.append(box)

    let cityName = document.createElement('h2')

    if(cities[i].isCapital === true){
        cityName.textContent = cities[i].name + '(capital)'
        box.classList = 'capital'
    } else {
        cityName.textContent = cities[i].name
    }
    box.append(cityName)

    let description = document.createElement('p')
    if(cities[i].name === 'Vilnius'){
        description.textContent = "Vilnius is the capital of Lithuania, located in Europe. It's known for its historic Old Town, beautiful architecture, and attractions like Gedimino bokštas (Gediminas' Tower) and Trakų pilis (Trakai Castle)."
    }
    if(cities[i].name === 'London'){
        description.textContent = "London, the capital of the United Kingdom in Europe, is a bustling metropolis known for iconic landmarks such as Buckingham Palace, Big Ben, and the London Eye."
    }
    if(cities[i].name === 'Paris'){
        description.textContent = "Paris, situated in Europe, is renowned for its romantic ambiance. It's home to iconic attractions like the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral."
    }
    if(cities[i].name === 'New York'){
        description.textContent = "New York City, located in North America, is a vibrant city known for the Statue of Liberty, Central Park, and the bustling Times Square."
    }
    if(cities[i].name === 'Sydney'){
        description.textContent = "Sydney, situated in Australia, boasts attractions like the Sydney Opera House, Sydney Harbour Bridge, and the famous Bondi Beach."
    }
    if(cities[i].name === 'Roma'){
        description.textContent = "Rome, the capital of Italy in Europe, is steeped in history with attractions such as the Colosseum, Roman Forum, and St. Peter's Basilica."
    }
    if(cities[i].name === 'Pekinas'){
        description.textContent = "Beijing, in Asia, is known for its rich history and attractions like the Forbidden City, the Great Wall of China, and the Temple of Heaven."
    }
    if(cities[i].name === 'Rio de Janeiro'){
        description.textContent = "Rio de Janeiro, in South America, is famous for landmarks such as the Christ the Redeemer statue, Copacabana Beach, and Maracanã Stadium."
    }
    if(cities[i].name === 'Dubai'){
        description.textContent = "Dubai, situated in Asia, is known for its modern architecture and attractions like the Burj Khalifa, Palm Islands, and Dubai Mall."
    }
    if(cities[i].name === 'Dubajus'){
        description.textContent = "Dubai, situated in Asia, is known for its modern architecture and attractions like the Burj Khalifa, Palm Islands, and Dubai Mall."
    }
    if(cities[i].name === 'Tokijas'){
        description.textContent = "Tokyo, the capital of Japan in Asia, is a vibrant city with attractions including Shinto shrines, Tokyo Tower, and the historic Akasaka Palace."
    }
    box.append(description)


    let h3TouristAttractions = document.createElement('h3')
    h3TouristAttractions.textContent = ''
    
    let ulForAttracctions = document.createElement('ul')
    
    cities[i].touristAttractions.forEach(function(attraction, index){
        let liForAttractions = document.createElement('li')
        liForAttractions.textContent = attraction

        if(index === 0){
            liForAttractions.style.color = 'green'
        } else if(index > 2){
            liForAttractions.style.color = 'red'
        }

        ulForAttracctions.appendChild(liForAttractions)
    })



 
    box.append(h3TouristAttractions)

    box.append(ulForAttracctions)

    if(cities[i].touristAttractions.length === 1){
        h3TouristAttractions.textContent = `Main Tourist attraction of ${cities[i].name} is:`
    } else if(cities[i].touristAttractions.length > 1){
        h3TouristAttractions.textContent = `Main Tourist attractions of ${cities[i].name} are:`
    } else {
        box.removeChild(h3TouristAttractions)
        box.removeChild(ulForAttracctions)
    }





    cityName.style.color = 'blueviolet'

    if(i % 2 === 1){
        cityName.style.backgroundColor = 'darkblue'
        box.style.backgroundColor = 'grey'
    }
}