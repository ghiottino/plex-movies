async function loadMovies() {
  try {
    console.log("Caricamento del file JSON in corso...");  // Aggiungi un log per verificare
    const response = await fetch("movies.json");

    // Verifica se la risposta è corretta
    if (!response.ok) {
      throw new Error("Errore nel caricamento del JSON");
    }

    // Estrai il JSON dalla risposta
    const data = await response.json();
    console.log("Dati effettivi:", data);  // Stampa la struttura completa dei dati

    // Verifica se 'data.data.data' è un array
    if (data && data.response && data.response.data && Array.isArray(data.response.data.data)) {
      const filmList = data.response.data.data;  // Ottieni l'array di film

      console.log("Struttura di filmList:", filmList);  // Verifica cosa contiene filmList

      // Ottieni il container dove visualizzare i film
      const container = document.getElementById('film-container');
      
      // Itera attraverso l'array di film
      filmList.forEach(film => {
        const filmElement = document.createElement('div');
        filmElement.innerHTML = `<h3>${film.title}</h3><p>${film.year}</p>`; // Puoi aggiungere altri dettagli qui
        container.appendChild(filmElement);  // Aggiungi ogni film al container
      });
    } else {
      console.error("Struttura dei dati non valida:", data);
    }

  } catch (error) {
    console.error("Errore nel caricamento del JSON:", error);
  }
}

// Carica i film quando la pagina è pronta
loadMovies();

