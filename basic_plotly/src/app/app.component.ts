import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Plotly: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  x = "test";

  @ViewChild('chart') el: ElementRef;

  model = {
    left: true,
    middle: false,
    right: false
  };

  title = 'angular-bootstrap-example';

  ngOnInit() {
    this.basicChart()
  }

  basicChart() {
    const element = this.el.nativeElement;

    /*
    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }]

    const layout = {
      margin: { t: 0 },
      autosize: true,
      responsive: true

    }
*/


    const trace1 = {
      type: 'bar',
      x: [1, 2, 3, 4],
      y: [5, 10, 2, 8],
      marker: {
        color: '#C8A2C8',
        line: {
          width: 2.5
        }
      }
    };

    const data = [ trace1 ];


    const layout = {
      autosize: true,
      title: 'Responsive to windows size!',
      font: {size: 18}
    };


    Plotly.plot(element, data, layout, { autosize: true, responsive: true });
  }

}
