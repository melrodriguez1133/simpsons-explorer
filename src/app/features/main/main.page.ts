import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  home,
  people,
  location,
  film,
  person
} from 'ionicons/icons';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  imports: [
    RouterLink,
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    CommonModule
  ]
})
export class MainPage {

  appPages = [
    {
      title: 'Home',
      url: '/main/home',
      icon: 'home'
    },
    {
      title: 'Characters',
      url: '/main/characters',
      icon: 'people'
    },
    {
      title: 'Locations',
      url: '/main/locations',
      icon: 'location'
    },
    {
      title: 'Episodes',
      url: '/main/episodes',
      icon: 'film'
    },
    {
      title: 'Profile',
      url: '/main/profile',
      icon: 'person'
    }
  ];

  constructor() {
    addIcons({
      home,
      people,
      location,
      film,
      person
    });
  }

}