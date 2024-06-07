import { Component } from '@angular/core';

import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  //Private gifService: GifsService;

  constructor( private gifsService: GifsService) {}

    get tags():string[]{
      return this.gifsService.tagsHistory;
    }

    searchTag(tag: string): void{
      this.gifsService.searchTag(tag);
    }


}
