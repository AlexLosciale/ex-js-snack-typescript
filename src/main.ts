import './style.css'

//Snack 1
//Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il
//valore in modo corretto.
//Se è una stringa: stampala in maiuscolo
//Se è un numero: moltiplicalo per due e stampalo
//Se è un booleano: stampa “Sì” o “No” in base al suo valore
//In tutti gli altri casi: stampa “Tipo non supportato”

type ApiResponse = string | number | boolean;
function handleApiResponse(response: ApiResponse): void {
  if (typeof response === 'string') {
    console.log(response.toUpperCase());
  } else if (typeof response === 'number') {
    console.log(response * 2);
  } else if (typeof response === 'boolean') {
    console.log(response ? 'Sì' : 'No');
  } else {
    console.log('Tipo non supportato');
  }
}
const apiResponse1: ApiResponse = "ciao";
const apiResponse2: ApiResponse = 2;
const apiResponse3: ApiResponse = true;
handleApiResponse(apiResponse1);
handleApiResponse(apiResponse2);
handleApiResponse(apiResponse3);


//Snack 2
//Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:
//nome → stringa
//cognome → stringa
//annoNascita → numero
//sesso → Può essere solo "m" o "f".
//anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: 'm' | 'f';
  anniDiServizio: number[];
};
const dipendente: Dipendente = {
  nome: 'Mario',
  cognome: 'Rossi',
  annoNascita: 1990,
  sesso: 'm',
  anniDiServizio: [2014, 2015, 2017, 2018]
};

console.log(dipendente);



//Snack 3
//Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:
//Developer
//livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
//linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
//certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
//ProjectManager
//teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
//budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
//stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello!</h1>
  </div>
`

