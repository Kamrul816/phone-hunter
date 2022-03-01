const searchPhone = () => {
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value;
    // console.log(searchText);
    searchfield.value = '';
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data));
}
