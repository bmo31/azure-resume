window.addEventListener('DOMContentLoaded', (event) =>{
    getVistCount();

})

const functionApi = '';

const getVistCount = () => {
    let count = 30;
    fetch(functionApi).then(reponse => {
        return reponse.json()
    }).then(reponse => {
        console.log("Website called function API.");
        count = reponse.count;
        document.getElementById("counter").innertext = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}