const myDiv = document.getElementById('root')

const headerElement = document.createElement('h1')
headerElement.innerText = 'Mona Lisa'

const imageElement = document.createElement('img');
imageElement.setAttribute('src', './mona_lisa.jpg')

const paragraphOne = document.createElement('p')
paragraphOne.innerText = 'The Mona Lisa is a famous painting.'

myDiv.appendChild(paragraphOne)
myDiv.appendChild(imageElement)
myDiv.appendChild(headerElement)
console.log(myDiv)

