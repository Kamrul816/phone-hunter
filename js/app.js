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

const displyPhoneDelail = phoneData =>{

 
    /* validation for release date */
    let releaseDate;

    if(phoneData.releaseDate === ''){
        releaseDate = "Not Found";
    }else{
        releaseDate = phoneData.releaseDate;
    }


    /* showing data on table */
    let div = document.createElement('div');
    div.classList.add('mt4');
    div.innerHTML = `<div class="d-flex justify-content-center mb-4">
                        <img class="img-fluid" src="${phoneData.image}" alt="">
                    </div>
                <div class="row">
                    <div  class="text-center fw-bolder display-5">Features</div>
                </div>
                <div class="row">
                    <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">Brand</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap">${phoneData.brand}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">Model :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap">${phoneData.name}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">Release Date :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap">${releaseDate}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">ChipSet :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap">${phoneData.mainFeatures.chipSet}<p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">Display Size :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap">${phoneData.mainFeatures.displaySize}<p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">Memory :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap">${phoneData.mainFeatures.memory}<p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">Storage :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap">${phoneData.mainFeatures.storage}<p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">Sensors :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap overflow-hidden">${phoneData.mainFeatures.sensors}<p>
                    </div>
                </div>
                
                ${phoneData.others ?  `<div class="row">
                                        <div class="text-center fw-bolder display-5">Others</div>
                                    </div>` : ""}
                ${phoneData.others ?  `<div class="row">
                 <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">Bluetooth :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap overflow-hidden">${phoneData.others.Bluetooth}<p>
                    </div>
                </div>` : ""}
                ${phoneData.others ?  `<div class="row">
                 <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">GPS :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap overflow-hidden">${phoneData.others.GPS}<p>
                    </div>
                </div>` : ""}
                ${phoneData.others ?  `<div class="row">
                 <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">NFC :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap overflow-hidden">${phoneData.others.NFC}<p>
                    </div>
                </div>` : ""}
                ${phoneData.others ?  `<div class="row">
                 <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">Radio :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap overflow-hidden">${phoneData.others.Radio}<p>
                    </div>
                </div>` : ""}
                ${phoneData.others ?  `<div class="row">
                 <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">USB :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap overflow-hidden">${phoneData.others.USB}<p>
                    </div>
                </div>` : ""}
                ${phoneData.others ?  `<div class="row">
                 <div class="col-md-5 border border-2 border-secondary">
                        <p class="text-primary fw-bolder m-0">WLAN :</p>
                    </div>
                    <div class="col-md-7 border border-2 border-secondary">
                        <p class="m-0 text-wrap overflow-hidden">${phoneData.others.WLAN}<p>
                    </div>
                </div>` : ""}
                
                `;

        document.getElementById('single-result').appendChild(div);
}
