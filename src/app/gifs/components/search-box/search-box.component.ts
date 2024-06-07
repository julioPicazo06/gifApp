import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5> Buscar 2 </h5>
    <input
      type="text"
      placeholder="Search for gifs"
      class="form-control"
      (keyup.enter)="seachTag()"
      #txtTagInput
      />`

})

export class SearchBoxComponent  {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement> ;
  constructor(private gifsService: GifsService) {

  }

  public seachTag (  ):void{
    const nexTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(nexTag);

    this.tagInput.nativeElement.value = '';
  }

}
