export function iniciarHome() {

const loadHero = async () => {
    try {
        const heroContainer = document.getElementById('hero-content');

        if (!heroContainer) return;

        heroContainer.innerHTML = 
        `<div class="hero-left">
          <div class="container">
            <h1 class="visually-hidden">Matheus Medeiros — Web Developer</h1>

            <p class="about-me">Me chamo Matheus <span> Construindo experiências web responsivas e visualmente envolventes com propósito.</span></p>

          </div>
        </div>
        
        <div class="vertical-name">
          <span>MEDEIROS</span>
          <span>MATHEUS</span>
        </div>
        
        <div class="hero-right">
          <img src="./src/assets/images/hero-right-bg.jpg" />
          <div class="actions">
            <a href="#" class="btn btn-primary">Meu Trabalho</a>
          </div>
        </div>` ;
    } catch (error) {
        console.error("Erro ao carregar o Hero:", error);
    }
}

loadHero()

}