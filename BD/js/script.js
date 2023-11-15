// Attendre que le document HTML soit complètement chargé
$(document).ready(function () {
    // Lorsque le bouton de recherche est cliqué
    $('#rechercher').on('click', function () {
        // Récupérer le terme de recherche saisi dans la barre de recherche
        const termeRecherche = $('#barreDeRecherche').val();
        rechercherAlbum(termeRecherche); // Appel de la fonction de recherche avec le terme saisi
    });
});

// Conversion des objets Map en tableaux d'objets
const albumsArray = Array.from(albums.values()); // Tableau d'objets pour les albums
const auteursArray = Array.from(auteurs.values()); // Tableau d'objets pour les auteurs
const seriesArray = Array.from(series.values()); // Tableau d'objets pour les séries

// Fonction pour rechercher des éléments correspondants dans un tableau d'objets
function rechercherElement(terme, elements) {
    const termeMinuscule = terme.toLowerCase();

    // Filtrer les éléments correspondants au terme de recherche
    const correspondances = elements.filter(element => {
        // Vérifier si l'élément et sa propriété 'nom' existent avant de les comparer
        if (element && element.nom) {
            return element.nom.toLowerCase().includes(termeMinuscule);
        }
        return false;
    });

    console.log('Correspondances:', correspondances); // Affichage des correspondances
    return correspondances;
}

// Fonction pour rechercher des correspondances dans les albums, séries et auteurs
function rechercherAlbum(termeRecherche) {
    const resultat = document.getElementById('resultatRecherche');
    resultat.innerHTML = ''; // Nettoyage de la zone de résultats

    // Recherche dans chaque tableau d'objets
    const correspondancesAlbums = rechercherElement(termeRecherche, albumsArray);
    const correspondancesSeries = rechercherElement(termeRecherche, seriesArray);
    const correspondancesAuteurs = rechercherElement(termeRecherche, auteursArray);

    // Concaténation des résultats de recherche
    const correspondances = [...correspondancesAlbums, ...correspondancesSeries, ...correspondancesAuteurs];

    const author = auteurs.get(albumsArray.idAuteur).nom.toLowerCase()
    // Affichage des correspondances trouvées dans la zone de résultats
    correspondances.forEach(correspondance => {
        resultat.innerHTML += `
            <div>
                <p>${correspondance.nom}</p>
                <p>${correspondance.author}</p>
                <p>${correspondance.prix}</p>
                <hr>
            </div>
        `;
    });

    // Si aucune correspondance n'est trouvée, afficher un message
    if (resultat.innerHTML === '') {
        resultat.innerHTML = '<p>Aucune correspondance trouvée.</p>';
    }
}

