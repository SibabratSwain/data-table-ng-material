import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Login, RandomUserApi, User, UserIntended} from "./User";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  displayedColumnsUser: string[] = ['name', 'location', 'email', 'picture', 'gender', 'phone', 'cell', 'nat'];
  totalUsers: UserIntended[] = [];
  // @ts-ignore
  dataSource: MatTableDataSource<UserIntended>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private http: HttpClient, private datePipe: DatePipe) {

  }

  ngAfterViewInit() {
    this.http.get('https://randomuser.me/api/?results=200').subscribe((res: any) => {
      const users: any = res.results;
      users.map((r: User) => {
        const dobFormatted = r.dob?.date ? this.datePipe.transform(r.dob?.date, 'dd/MM/yyyy') : '';
        const registeredFormatted = r.registered?.date ? this.datePipe.transform(r.registered?.date, 'dd/MM/yyyy') : '';
        const finalObj = {
          email: r.email,
          gender: r.gender === 'male' ? 'Male' : 'Female',
          phone: r.phone,
          cell: r.cell,
          nat: r.nat,
          location: r.location?.country,
          name: r.name?.first + r.name?.last,
          id: r.id?.name,
          login: r.login?.username,
          registered: registeredFormatted,
          dob: dobFormatted,
          picture: r.picture?.thumbnail,
        };
        this.totalUsers.push(finalObj);
      })

      const keys = Object.keys(this.totalUsers[0])
      this.displayedColumnsUser = keys;

      console.log(this.totalUsers, keys);
      this.dataSource = new MatTableDataSource(this.totalUsers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
