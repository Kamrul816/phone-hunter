const searchPhone = () => {
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value;
    // clear data
    searchfield.value = '';
    // load data
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    
    // clear result
    searchResult.innerHTML = '';
    
    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">${phone.brand}</p>
              <button onclick = "loadPhoneDetails('${phone.phone_name}')">Details Explore</button>
            </div>
        </div>
        ` ;
        searchResult.appendChild(div);
    })
}

const loadPhoneDetails = slug => {
    const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089${slug}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.mainFeatures));

}
