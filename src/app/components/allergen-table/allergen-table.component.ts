import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AllergenIntoleranceModel} from '../../models/allergen-intolerance.model';
import {Subscription} from 'rxjs';
import {AllergyService} from '../../services/allergy.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-allergen-table',
  templateUrl: './allergen-table.component.html',
  styleUrls: ['./allergen-table.component.css']
})
export class AllergenTableComponent implements OnInit, OnDestroy, AfterViewInit {

  isLoading = true;

  allergies: AllergenIntoleranceModel[] = [];
  private allergiesSub: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['code', 'category', 'description', 'criticality', 'recordedDate'];
  dataSource = new MatTableDataSource();

  constructor(private allergyService: AllergyService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.isLoading = true;
    this.allergyService.getAllergies()
      .catch(console.error);
    this.allergiesSub = this.allergyService.getAllergiesUpdateListener()
      .subscribe((allergies) => {
        this.allergies = allergies;
        this.dataSource = new MatTableDataSource<AllergenIntoleranceModel>(allergies);
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.allergiesSub.unsubscribe();
  }

}
