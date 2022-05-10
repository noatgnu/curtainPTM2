import {Component, Input, OnInit} from '@angular/core';
import {WebService} from "../../web.service";
import {UniprotService} from "../../uniprot.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-kinase-info',
  templateUrl: './kinase-info.component.html',
  styleUrls: ['./kinase-info.component.scss']
})
export class KinaseInfoComponent implements OnInit {
  private _name: string = ""
  uni: any = {}
  data: any = {}
  @Input() set name(value: string) {
    this._name = value
    if (this._name !== "") {
      this.uni = this.uniprot.getUniprotFromAcc(this._name)
    }
  }

  get name(): string {
    return this._name
  }
  constructor(private web: WebService, private uniprot: UniprotService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
