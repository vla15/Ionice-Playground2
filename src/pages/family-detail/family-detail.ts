import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-family-detail',
  templateUrl: 'family-detail.html'
})

export class FamilyDetailPage {
  family: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.family = this.navParams.get('family');
  }
}