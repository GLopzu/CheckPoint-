export class Chara extends HTMLElement {
  selected = this.charaName;

  static get observedAttributes() {
    return ["name", "specie", "gender", "house", "birth", "alter"];
  }

  attributeChangedCallback(propName, _, newValue) {
    switch (propName) {
      case "name":
        this.charaName = newValue;
        break;
      case "specie":
        this.charaSpecie = newValue;
        break;
      case "gender":
        this.charaGender = newValue;
        break;
      case "house":
        this.charaHouse = newValue;
        break;
      case "birth":
        this.charaBirth = newValue;
        break;
      case "alter":
        this.charaAlter = newValue;
      default:
        break;
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.mount();
  }

  mount() {
    this.render();
    const btn = this.shadowRoot.querySelector("button");
    btn.addEventListener("click", () => {
      if (this.selected === this.charaAlter) {
        this.selected = this.charaName;
      } else {
        if (this.charaAlter) {
          this.selected = this.charaAlter;
        }else {this.selected = "Sin apodo"}
      }

      this.mount();
    });
  }
  render() {
    this.shadowRoot.innerHTML = `
        <section>
        <h3>Nombre: ${this.selected} </h3>
        <h3>Specie: ${this.charaSpecie} </h3>
        <h3>Gender: ${this.charaGender} </h3>
        <h3>House: ${this.charaHouse} </h3>
        <h3>Birth: ${this.charaBirth}</h3>
        <button> Click </button>

        </section>`;
  }
}

customElements.define("app-chara", Chara);
