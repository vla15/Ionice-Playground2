import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FamilyDetailPage } from '../family-detail/family-detail';
import { Family } from '../../models/family';


@Component({
  selector: 'page-families',
  templateUrl: 'families.html'
})
export class FamiliesPage {
  selectedFamily: any;
  icons: string[];
  familyNames: string[];
  families: Family[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Let's populate this page with some filler content for funzies
    this.familyNames = ['La', 'Lim', 'Hoang', 'Tam'];
    
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    for (let i = 0; i < this.familyNames.length; i++) {
      this.families.push({
        title: this.familyNames[i],
        note: `This is the ${this.familyNames[i]} family`,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(family) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(FamilyDetailPage, {
      family: family
    });
  }
}
