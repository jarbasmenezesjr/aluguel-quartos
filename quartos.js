var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        localStorage.setItem("quartos", this.responseText);     
    }
};

xmlhttp.open("GET", "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72", true);
xmlhttp.send();

function exibirCards() {
    let html = '';
    let json = localStorage.getItem("quartos");
    let quartos = JSON.parse(json);    
    
    for (const key in quartos) {
        if (quartos.hasOwnProperty(key)) {
            const element = quartos[key]; 
            
            html += `<div class="card">
                        <img src="${element.photo}" class="card-img-top" >
                        <div class="card-body">
                            <h5 class="card-title">${element.property_type}</h5>
                            <p class="card-text">${element.name}</p>
                            <p class="card-price">R$ ${element.price},00</p>
                        </div>                        
                    </div>`; 
        } else{
            break;
        }          
    }
    document.write(html);    
}
