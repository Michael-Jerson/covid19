fetch('https://corona.lmao.ninja/v2/countries/philippines')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        //document.getElementById("flag").src = data.countryInfo.flag; /*---==uncomment to display flag info==---*/
        //document.getElementById("country").innerHTML = data.country; /*---==uncomment to display country info==---*/
        document.getElementById("cases").innerHTML = data.cases;
        document.getElementById("critical").innerHTML = data.critical;
        document.getElementById("death").innerHTML = data.deaths;
        document.getElementById("recovered").innerHTML = data.recovered;
        document.getElementById("tests").innerHTML = data.tests;
        document.getElementById("active").innerHTML = data.active;
    })
