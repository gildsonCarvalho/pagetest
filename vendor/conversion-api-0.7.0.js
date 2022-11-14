function dnConversionAPI(events, social_media) {
    const url = `http://127.0.0.1:8000/api/conversion/send_conversion`;
    if(social_media !== 'fb') {
        console.log(`[Tracking] ${social_media} not found in social_media`);
        return;
    }

    events.event_time = Math.floor(new Date().getTime() / 1000)
    events.event_source_url = window.location.href;
    
    events.client_user_agent = window.navigator.userAgent;
    events.fbp = getCookie('_fbp');
    events.fbc = getCookie('_fbc');

    fetch(`https://api.ipify.org?format=json`)
        .then(res => res.json())
        .then(response => {
            events.client_ip_address = response.ip;
            apiReq(events, url, social_media);
        })

}

function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
function apiReq(events, url, social_media) {
    fetch(url + `/` + social_media, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(events)
    })
        .then((res) => res.json())
        .then((responseData) => {
            console.log(responseData)
        })
        .catch((err) => console.log(err.json()))
}