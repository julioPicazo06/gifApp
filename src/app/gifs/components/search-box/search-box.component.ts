import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5> Buscar </h5>
    <input
      type="text"
      placeholder="Search for gifs"
      class="form-control"
      />`

})

export class SearchBoxComponent  {
  constructor() { }

}
