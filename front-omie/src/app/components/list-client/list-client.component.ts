import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ClientShort } from '../model/client.model';
import { ClientService } from '../services/client/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ClientShort>;
  dataSource: MatTableDataSource<ClientShort> =
    new MatTableDataSource<ClientShort>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  client: MatTableDataSource<any> = new MatTableDataSource(new Array());
  status: string = 'ALL';
  displayedColumns = [
    'id',
    'name',
    'nickname',
    'status',
    'subscription',
    'action',
  ];
  total!: number

  constructor(private clientService: ClientService) {
    this.dataSource.data = [];
  }
  ngOnInit() {
    this.list();
  }

  list() {
    this.clientService.readClientPage(0, 1).subscribe((page: any) => {
      this.total = page.totalElements;
      this.charge()
    });
   
  }
  charge(){
    this.clientService.readClientPage(0, this.total).subscribe((page: any) => {
      this.dataSource.data = page.content;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
