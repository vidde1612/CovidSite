fetch("https://api.covid19api.com/live/country/sweden")
.then(res => res.json())
.then((data) => {
    data.forEach((region) => {
        if (region.Province === "Stockholm") {
            console.log(region);
        }
    })
});