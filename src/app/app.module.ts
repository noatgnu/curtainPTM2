import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { FileFormComponent } from './components/file-form/file-form.component';
import {FileInputWidgetComponent} from "./components/file-input-widget/file-input-widget.component";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {VolcanoColorsComponent} from "./components/volcano-colors/volcano-colors.component";
import {VolcanoPlotComponent} from "./components/volcano-plot/volcano-plot.component";
import {BatchSearchComponent} from "./components/batch-search/batch-search.component";
import {ProteinSelectionsComponent} from "./components/protein-selections/protein-selections.component";
import {FdrCurveComponent} from "./components/fdr-curve/fdr-curve.component";
import {PlotlyModule} from "angular-plotly.js";
import * as PlotlyJS from 'plotly.js-dist-min';
import {ColorPickerModule} from "ngx-color-picker";
import {CytoplotComponent} from "./components/cytoplot/cytoplot.component";
import {VolcanoAndCytoComponent} from "./components/volcano-and-cyto/volcano-and-cyto.component";
import {NetworkInteractionsComponent} from "./components/network-interactions/network-interactions.component";
import { DataViewerComponent } from './components/data-viewer/data-viewer.component';
import { DataBlockComponent } from './components/data-block/data-block.component';
import {ProteinInformationComponent} from "./components/protein-information/protein-information.component";
import {ProteinDomainPlotComponent} from "./components/protein-domain-plot/protein-domain-plot.component";
import { RawDataComponent } from './components/raw-data/raw-data.component';
import {BarChartComponent} from "./components/bar-chart/bar-chart.component";
import {ContextMenuModule, ContextMenuService} from "ngx-contextmenu";
import { PtmPositionViewerComponent } from './components/ptm-position-viewer/ptm-position-viewer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NetphosKinasesComponent} from "./components/netphos-kinases/netphos-kinases.component";
import { KinaseInfoComponent } from './components/kinase-info/kinase-info.component';
PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToastContainerComponent,
    FileFormComponent,
    FileInputWidgetComponent,
    VolcanoColorsComponent,
    VolcanoPlotComponent,
    BatchSearchComponent,
    ProteinSelectionsComponent,
    FdrCurveComponent,
    CytoplotComponent,
    VolcanoAndCytoComponent,
    NetworkInteractionsComponent,
    DataViewerComponent,
    DataBlockComponent,
    ProteinInformationComponent,
    ProteinDomainPlotComponent,
    RawDataComponent,
    BarChartComponent,
    PtmPositionViewerComponent,
    NavbarComponent,
    NetphosKinasesComponent,
    KinaseInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    PlotlyModule,
    ColorPickerModule,
    ContextMenuModule
  ],
  providers: [HttpClient, ContextMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
