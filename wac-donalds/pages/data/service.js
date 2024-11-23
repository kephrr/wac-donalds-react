function findAllData(){
    const jsonFilePath = './repository.json';
    let data;
    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Convertit la réponse en objet JSON
        })
        .then(json => {
            data = json
        })
        .catch(error => {
            console.error('Erreur lors du chargement du fichier JSON:', error);
        });
    return data;
}
function findDataByCategory(cat){
    let values = findAllData()
    let data =[]
    for (let i=0; i<values.length; i++){
        if(values[i].cat===cat){
            data.push(values[i]);
        }
    }
    return data
}


export default findDataByCategory;