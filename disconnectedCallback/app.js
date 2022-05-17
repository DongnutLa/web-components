class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('hola desde el ctor')
  }
  connectedCallback() {
    console.log('Hola desde el dom')
  }
  disconnectedCallback() {
    console.log('Adios del DOM');
  }
}

customElements.define('my-custom', MyCustomElement);

document.querySelector('my-custom').remove();