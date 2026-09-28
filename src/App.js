import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/*Dein Code unter dieser Zeile  */}


      <h1>Fachhochschule Nordwestschweiz</h1>

      <div className="content">

  <div className="text">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <strong>tempor</strong> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <strong>ullamco laboris</strong> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <strong>velit esse</strong>voluptate  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <strong>sunt in culpa</strong> qui officia deserunt mollit anim id est laborum.</p>
  
  <a href="https://de.wikipedia.org/wiki/Fachhochschule_Nordwestschweiz" target="_blank">
      Wikipedia
    </a>.
  
  </div>

  <div className="infobox">
  <h2 className="infobox-title">Schnelle Fakten</h2>

  <img
    className="infobox-image"
    src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/FHNW_Campus_Brugg_Windisch.jpg/500px-FHNW_Campus_Brugg_Windisch.jpg"
    alt="FHNW Campus Brugg-Windisch"
  />

  <div className="fact-row">
  <div className="fact-left">Gründung</div>
  <div className="fact-right">2006</div>
</div>

<div className="fact-row">
  <div className="fact-left">Standorte</div>
  <div className="fact-right">Basel, Brugg-Windisch, Muttenz, Olten</div>
</div>



</div>

</div>
   








        {/*Dein Code über dieser Zeile  */}
    </div>
  );
}
