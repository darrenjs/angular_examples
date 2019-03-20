import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Plotly: any;
export const TableData:Array<any> = [
  {
    'name': 'Victoria Cantrell',
    'position': 'Integer Corporation',
    'office': 'Croatia',
    'ext': `<strong>0839</strong>`,
    'startDate': '2015/08/19',
    'salary': 208.178
  }, {
    'name': 'Pearl Crosby',
    'position': 'In PC',
    'office': 'Cambodia',
    'ext': `<strong>8262</strong>`,
    'startDate': '2014/10/08',
    'salary': 114.367
  }, {
    'name': 'Colette Foley',
    'position': 'Lorem Inc.',
    'office': 'Korea, North',
    'ext': '8968',
    'startDate': '2015/07/19',
    'salary': 721.473
  }, {
    'name': 'Anastasia Shaffer',
    'position': 'Dolor Nulla Semper LLC',
    'office': 'Suriname',
    'ext': '7980',
    'startDate': '2015/04/20',
    'salary': 264.620
  }, {
    'name': 'Gabriel Castro',
    'position': 'Sed Limited',
    'office': 'Bahrain',
    'ext': '0757',
    'startDate': '2015/03/04',
    'salary': 651.350
  }, {
    'name': 'Cherokee Ware',
    'position': 'Tincidunt LLC',
    'office': 'United Kingdom (Great Britain)',
    'ext': '3995',
    'startDate': '2015/06/17',
    'salary': 666.259
  }
  , {
    'name': 'Liberty Gallegos',
    'position': 'Nec Diam LLC',
    'office': 'Ghana',
    'ext': '9266',
    'startDate': '2015/06/18',
    'salary': 554.375
  }, {
    'name': 'Dennis York',
    'position': 'Nullam Suscipit Foundation',
    'office': 'Namibia',
    'ext': '3133',
    'startDate': '2015/03/20',
    'salary': 90.417
  }, {
    'name': 'Petra Chandler',
    'position': 'Pede Nonummy Inc.',
    'office': 'Namibia',
    'ext': '3367',
    'startDate': '2015/03/26',
    'salary': 598.915
  }, {
    'name': 'Aurelia Marshall',
    'position': 'Donec Consulting',
    'office': 'Nicaragua',
    'ext': '2690',
    'startDate': '2015/08/18',
    'salary': 201.680
  }, {
    'name': 'Rose Carter',
    'position': 'Enim Consequat Purus Industries',
    'office': 'Morocco',
    'ext': '0619',
    'startDate': '2015/03/06',
    'salary': 220.187
  }, {
    'name': 'Denton Atkins',
    'position': 'Non Vestibulum PC',
    'office': 'Mali',
    'ext': '5806',
    'startDate': '2015/04/19',
    'salary': 324.588
  }, {
    'name': 'Reuben Albert',
    'position': 'Lobortis Institute',
    'office': 'Zambia',
    'ext': '8725',
    'startDate': '2015/04/04',
    'salary': 791.408
  }, {
    'name': 'Idola Burns',
    'position': 'Non Industries',
    'office': 'Myanmar',
    'ext': '3201',
    'startDate': '2015/06/24',
    'salary': 142.906
  }, {
    'name': 'Laura Macias',
    'position': 'Phasellus Inc.',
    'office': 'Mauritania',
    'ext': '2033',
    'startDate': '2014/11/21',
    'salary': 226.591
  }, {
    'name': 'Nichole Salas',
    'position': 'Duis PC',
    'office': 'Madagascar',
    'ext': '4397',
    'startDate': '2015/01/18',
    'salary': 234.196
  }, {
    'name': 'Hunter Walter',
    'position': 'Ullamcorper Duis Cursus Foundation',
    'office': 'Brazil',
    'ext': '2227',
    'startDate': '2015/02/28',
    'salary': 655.052
  }, {
    'name': 'Asher Rich',
    'position': 'Mauris Ipsum LLP',
    'office': 'Paraguay',
    'ext': '7288',
    'startDate': '2015/08/08',
    'salary': 222.946
  }, {
    'name': 'Angela Carlson',
    'position': 'Donec Tempor Institute',
    'office': 'Papua New Guinea',
    'ext': '5416',
    'startDate': '2015/02/12',
    'salary': 562.194
  }, {
    'name': 'James Dorsey',
    'position': 'Ipsum Leo Associates',
    'office': 'Congo (Brazzaville)',
    'ext': '6019',
    'startDate': '2015/01/10',
    'salary': 629.925
  }


























]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private data:Array<any> = TableData;

  public rows:Array<any> = TableData;
  public columns:Array<any> = [
    {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {
      title: 'Position',
      name: 'position',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by position'}
    },
    {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
    {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
    {title: 'Start date', className: 'text-warning', name: 'startDate'},
    {title: 'Salary ($)', name: 'salary'}
  ];


  public page:number = 1;
  public itemsPerPage:number = 5;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };

  x = "test";

  @ViewChild('chart') el: ElementRef;

  model = {
    left: true,
    middle: false,
    right: false
  };

  title = 'angular-bootstrap-example';

  ngOnInit() {

    this.onChangeTable(this.config);
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }


  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }


  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }



}
