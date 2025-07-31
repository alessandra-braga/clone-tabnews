// pages/index.js

function Home() {
  return (
    <div> {/* Adicionei uma div para envolver tudo */}
      <h1>Píncipe & Pincesa ❤️🥰</h1>
      <p>Píncipe lindo, eu amo você. Se você me ama, dá uma risadinha! 🤭❤️</p>

      <audio controls>
        <source src="/audio/musica_para_pincipe.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

    </div>
  );
}

export default Home;
