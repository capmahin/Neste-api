const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>displayCountries(data));
}
loadCountries();

const displayCountries = counties =>{
  const  countiesDiv = document.getElementById('countries');
  counties.forEach(country =>{
      console.log(country);
      const div = document.createElement('div');
      div.classList.add('country');
      const h3 = document.createElement('h3');
      h3.innerText = country.name;
      div.appendChild(h3);
      const p = document.createElement('p');
      p.innerText = country.capital;
      div.appendChild(p);
  })
}