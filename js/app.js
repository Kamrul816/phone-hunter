const searchPhone = () => {
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value;
    // clear data
    searchfield.value = '';
    document.getElementById('single-result').innerHTML ='';
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
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">${phone.brand}</p>
              <a href="#" onclick = "loadPhoneDetails('${phone.slug}')" class ="btn btn-success" >Detail Explore</a>
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
        div.classList.add("col-4");
        div.innerHTML = `<h3 class="text-center text-danger">Phone not found</h3>`
        searchResult.appendChild(div);
    }
}

const loadPhoneDetails = phoneId => {

    document.getElementById('single-result').innerHTML = '';

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displyPhoneDelail(data.data));
}

