import { Component, OnInit } from '@angular/core';
import { Ferramenta } from '../../../models/ferramentaInter';
import { FerramentaService } from '../../../services/ferramenta.service';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.css']
})
export class ToolsListComponent implements OnInit {
  ferramentas: Array<Ferramenta> = [];
  constructor(private ferramentaService:FerramentaService) { }

  ngOnInit(): void {
    this.getFerramentas();
  }

  getFerramentas(): void{
    this.ferramentaService.getFerramentas().subscribe(response => {
      this.ferramentas = response;
    })
  }

}
