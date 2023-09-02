import data from "./data.js";
import { Chara } from "./src/comp/charac/Charac.js";


class App extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
    render(){
        const charas = data.map(
            (chara) => `<app-chara 
            name="${chara.name}" 
            specie="${chara.species}"
            gender= "${chara.gender}"
            house= "${chara.house}"
            birth= "${chara.yearOfBirth}"
            alter= "${chara.alternate_names}"
            > </app-chara>`
        );
        const charasJoined = charas.join("");
        this.shadowRoot.innerHTML = `${charasJoined}`;
    }
}

customElements.define ("app-container", App);
