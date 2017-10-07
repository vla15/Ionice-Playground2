import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FamilyDetailPage } from '../family-detail/family-detail';

@Component({
  selector: 'page-families',
  templateUrl: 'families.html'
})
export class FamiliesPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(FamilyDetailPage, {
      family: item
    });
  }
}
