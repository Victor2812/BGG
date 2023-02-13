const boardgameName = document.getElementById('boardgame');
const buscar = document.getElementById('buscar');
const API_URL = "https://api.geekdo.com/xmlapi2";

const searchbox = document.getElementById('searchbox');

boardgameName.addEventListener('keyup', getBoardGames);

function getBoardGames() {
    let nombre = boardgameName.value;
    //alert(nombre);
   fetch(`${API_URL}/search?query=${nombre}&type=boardgame`)
   .then(response => {
        if (response.ok) {
            console.log("response is ok");
            //console.log(response.text());
            return response.text();
        } else {
            console.log("response ERROR");
        }
   })
   .then(data => {
        let parser  = new DOMParser(),
            xmlDoc = parser.parseFromString(data, "application/xml");
        //console.log(xmlDoc);
        getSearchResultJSONFromResultXML(xmlDoc);
   })
   .catch(err => {
        console.log(err);
   });
}

function getSearchResultJSONFromResultXML(xmlDoc){
    const result = [];
    const xmlItems = xmlDoc.getElementsByTagName("item");
    for (let i = 0; i < xmlItems.length; i++) {
        result.push({
            id: xmlItems[i].getAttribute('id'),
            name: xmlItems[i].getElementsByTagName('name')[0].getAttribute('value'),
            year: xmlItems[i].getElementsByTagName('yearpublished')[0].getAttribute('value'),
        })
    }
    console.log(result);
    fillSearchBox(result);
}

function fillSearchBox(result) {
    while(searchbox.firstChild) searchbox.removeChild(searchbox.firstChild);
    result.forEach(e => {
        let name = e.name;
        let year = e.year;
        
        let line = document.createElement('li');
        line.setAttribute('id', e.id);
        line.className = 'listGroupItem';

        line.innerText = name + ' ' + "(" + year + ")";

        searchbox.appendChild(line);
    });
}

function getBoardGame(result) {
    result.forEach(element => {
        fetch(`${API_URL}/thing?id=${element.id}`)
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    console.log('response failed');
                }
            })
            .then(data => {
                let parser = new DOMParser(),
                    xml = parser.parseFromString(data, "application/xml");
                console.log(xml);
                createTableRow(xml);
            })
            .catch(err => {
                console.log(err);
            });
    });
}