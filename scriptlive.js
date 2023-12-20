let usdt = document.getElementById("usdt");
let market_cap = document.getElementById("market-cap");
let volume_24 = document.getElementById("vol-24");
let change_24 = document.getElementById("change-24");
let last_update = document.getElementById("last-update");


var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=INR&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=7",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function(response){
    usdt.innerHTML = response.tether.inr;
    market_cap.innerHTML = response.tether.inr_market_cap;
    volume_24.innerHTML = response.tether.inr_24h_vol;
    change_24.innerHTML = response.tether.inr_24h_change;
    last_update.innerHTML = response.tether.last_updated_at;
})


let coin_input;
let price_value;
let answer_value;


function calco(coin_input){
    coin_input = document.getElementById("usdt-input").value;
    price_value = document.getElementById("usdt-selling-set-go").innerHTML;
    answer_value = coin_input*price_value;

    document.getElementById("answer-money").innerHTML = answer_value;
    

}