import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./features/main/main.page').then(m => m.MainPage),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home/home.page').then(m => m.HomePage),
      },
      {
        path: 'characters',
        loadComponent: () =>
          import('./features/characters/characters.page').then(m => m.CharactersPage),
      },
      {
        path: 'locations',
        loadComponent: () =>
          import('./features/locations/locations.page').then(m => m.LocationsPage),
      },
      {
        path: 'episodes',
        loadComponent: () =>
          import('./features/episodes/episodes.page').then(m => m.EpisodesPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/profile.page').then(m => m.ProfilePage),
      },
      {
  path: 'characters/:id',
  loadComponent: () =>
    import('./features/character-detail/character-detail.page').then(m => m.CharacterDetailPage),
},
{
  path: 'episodes/:id',
  loadComponent: () =>
    import('./features/episode-detail/episode-detail.page').then(m => m.EpisodeDetailPage),
},
    ]
  },

];