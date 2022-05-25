import {Component, Input, OnInit} from '@angular/core';
import {WebService} from "../../web.service";
import {DataService} from "../../data.service";
import {ScrollService} from "../../scroll.service";
import {SettingsService} from "../../settings.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SampleAnnotationComponent} from "../sample-annotation/sample-annotation.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() finished: boolean = false
  @Input() uniqueLink: string = ""
  filterModel: string = ""
  constructor(
    public web: WebService,
    public data: DataService,
    private scroll: ScrollService,
    private settings: SettingsService,
    private modal: NgbModal) { }

  ngOnInit(): void {
  }

  saveSession() {
    const data: any = {
      raw: this.data.raw.originalFile,
      rawForm: this.data.rawForm,
      differentialForm: this.data.differentialForm,
      processed: this.data.differential.originalFile,
      settings: this.settings.settings,
      password: "",
      selections: this.data.selected,
      selectionsMap: this.data.selectedMap,
      selectionsName: this.data.selectOperationNames,
      dbIDMap: this.data.dbIDMap,
      fetchUniProt: this.data.fetchUniProt,
      annotatedData: this.data.annotatedData,
      annotatedMap: this.data.annotatedMap
    }
    this.web.putSettings(data).subscribe(data => {
      if (data.body) {
        this.settings.currentID = data.body
        this.uniqueLink = location.origin +"/#/" + this.settings.currentID
      }
    })
  }

  clearSelections() {

  }

  scrollTo() {
    let res: string[] = []
    switch (this.data.searchType) {
      case "Gene names":
        res = this.data.getPrimaryFromGeneNames(this.filterModel)
        break
      case "Accession IDs":
        res = this.data.getPrimaryFromAcc(this.filterModel)
        break
      case "Primary IDs":
        res = [this.filterModel]
        break
    }
    if (res.length > 0) {
      const primaryIDs = res[0]
      const ind = this.data.selected.indexOf(primaryIDs)
      const newPage = ind + 1
      if (this.data.page !== newPage) {
        this.data.page = ind + 1
      }
      this.scroll.scrollToID(primaryIDs+"scrollID")
    }
  }

  openAnnotation() {
    const ref = this.modal.open(SampleAnnotationComponent, {size: "lg"})
    ref.closed.subscribe(data => {
      this.settings.settings.project = data
    })
  }
}
