async function loadMovies() {
  try {
    const response = await fetch("movies.json");

    // Verifica se la risposta è corretta
    if (!response.ok) {
      throw new Error("Errore nel caricamento del JSON");
    }

    // Estrai il JSON dalla risposta
    const data = await response.json();
    console.log("Dati effettivi:", data);  // Stampa la struttura completa dei dati

    // Verifica se 'data.response.data' è un array
    if (data && data.response && data.response.data && Array.isArray(data.response.data)) {
      const filmLis
