document.getElementById("rechercher").addEventListener("click", function () {


    document.querySelector(".block").innerHTML = ""


    let albumSearch = document.querySelector("#barreDeRecherche").value

    let i = 0
    while (i <= 19)

        document.querySelector('.container').innerHTML += `    
        
// syntaxe a essayer 
${data["albums"][i].titre}
//


    `

})