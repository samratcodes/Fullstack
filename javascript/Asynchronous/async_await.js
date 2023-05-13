async function fetchapi(url){
    let response = await fetch(url)
  let data = await response.json();
  
  
    const container = document.getElementById('container');
    container.className = "d-flex justify-content-around flex-wrap";
  
  
  
    data.products.forEach((product) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.width = '18rem';
  
      const image = document.createElement('img');
      image.src = product.thumbnail;
      image.className = 'h-50';
      card.append(image);
  
      const body = document.createElement('div');
      body.className = 'card-body';
      card.append(body);
  
      const title = document.createElement('h5');
      title.className = 'card-title';
      title.innerHTML = product.title;
      card.append(title);
  
      const description = document.createElement('p');
      description.className = 'card-text';
      description.innerHTML = product.description;
      card.append(description);
  
      const button = document.createElement('a');
      button.className = 'btn btn-primary';
      button.innerHTML = 'View product';
      card.append(button);
  
      container.append(card);
  })
  
  }
  
  fetchapi("https://dummyjson.com/products");
  
  