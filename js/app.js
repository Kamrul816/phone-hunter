const searchPhone = () => {
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value;
    // clear data
    searchfield.value = '';
    // load data
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data));
}

const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    
    // clear result
    searchResult.innerHTML = '';
    if(phones.status){
        let i=1;
    phones.data.forEach(phone => {
        if(i<21){
            // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">${phone.brand}</p>
              <button onclick = "loadPhoneDetails('${phone.slug}')">Detail Explore</button>
            </div>
        </div>
        ` ;
        searchResult.appendChild(div);
        i++;
        }
    })
    }
    else{
        let div = document.createElement('div');
        div.classList.add("col-12");
        div.innerHTML = `<h3 class="text-center text-danger text-center">Phone not found</h3>`
        searchResult.appendChild(div);
    }
}

const loadPhoneDetails = phoneId => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));

}
