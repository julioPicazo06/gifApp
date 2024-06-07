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

    get tags(){
      return this.gifsService.tagsHistory;
    }


}
