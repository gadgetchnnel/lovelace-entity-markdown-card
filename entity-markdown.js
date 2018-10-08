class EntityMarkdownCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
    	this.attachShadow({ mode: 'open' });
      	this.shadowRoot.innerHTML = `
      		<style>
      			a {
        			color: var(--dark-primary-color)
      			}
      			
      			ha-card div {
      				padding: 0.5em;
      			}
      		</style>
      	`;
		const card = document.createElement('ha-card');
		card.header = this.config.title;
		this.content = document.createElement('div');
      	card.appendChild(this.content);
      	this.shadowRoot.appendChild(card);
    }
    
	this._hass = hass;
	let stateText = hass.states[this.config.entity].state.replace("'","&apos;");
	this.content.innerHTML = `
      <ha-markdown content='${stateText}'></ha-markdown>
    `;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define entity');
    }
    
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
  	let stateText = this._hass.states[this.config.entity].state;
  	if(stateText == "")
  	{
  		return 0
  	}
  	else
  	{
    	return stateText.split('\n').length + 2;
    }
  }
}

customElements.define('entity-markdown', EntityMarkdownCard);
