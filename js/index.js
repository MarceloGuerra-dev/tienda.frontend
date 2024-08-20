const $ = document
const containerProducts = $.querySelector('#containerProducts')

const renderCards = (array) => {
  containerProducts.innerHTML = ""
  array.map(item => {
    const {title, image, description, price} = item

    containerProducts.innerHTML +=
    `<div class="card">
      <h3 class="card-title">${title}</h3>
      <img class="card-img" src= ${image} alt=""/>
      <p class="card-description">${description} </p>
      <strong class="card-price">$${price}</strong>
      <button class="card-btn">Agregar al carrito</button>
     </div>
    `

  })
}

// Cargo los productos desde la base de datos
fetch('http://localhost:3008/main/productos')
  .then((res)=>res.json())
  .then((data)=> renderCards(data))

  .catch((err)=>console.log(err))
