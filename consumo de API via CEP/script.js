const form = document.forms["data-form"];
const adressContent = document.getElementById("content-container")



const aoSubmit = async (e) => {
    e.preventDefault();
    const input  = form.elements.dataInput.value;
    let html = "";
    
    try {
        const data = await fetch(`https://cep.awesomeapi.com.br/json/${input}`);      
        const res = await data.json();
        console.log(res);

        const keys = Object.keys(res)
        const values = Object.values(res);
       
        
        keys.forEach((item, index) => html += `
        <p>
            ${item}: 
                <strong>
                    ${values[index]}
                </strong>
        </p>`
        );
        adressContent.innerHTML = html;
        
    } catch (error){
        adressContent.innerHTML = `<p>ERROOOORR:<strong>${error}</strong></p>`;
        console.log(error);
    }
};


form.addEventListener("submit", aoSubmit);