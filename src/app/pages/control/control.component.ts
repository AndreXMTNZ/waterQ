import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent  implements OnInit {

  constructor(public database: AngularFireDatabase) { 
    this.leerMediciones();
  }

  ngOnInit() {}

  leerMediciones () {
    const path = 'SensorData/';
    this.database.list(path).valueChanges().subscribe( res => {
        console.log('mediciones ->', res)
    })
  }
}
