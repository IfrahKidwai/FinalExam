class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);
class TwoSided extends HTMLElement{
	connectedCallback(){
		this.innerHTML = '<a href="shopping">shopping</a> <a href="kit_developers"> kit developers</a>'
	}
}
customElements.define("x-twosided", TwoSided);