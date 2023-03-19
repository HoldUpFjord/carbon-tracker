document.querySelector('button', fetchNews)
function fetchNews(){
    const url = 'https://climate-change-live402.p.rapidapi.com/news/nyp';

    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4852155a1bmshd3e4dbc3f121d3ap1567d8jsn98b7b7e02f87',
        'X-RapidAPI-Host': 'climate-change-live402.p.rapidapi.com'
            }
        };

    fetch(url, options)
	    .then(res => res.json())
	    .then(json => console.log(json))
	    .catch(err => console.error('error:' + err));
    }