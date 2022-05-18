// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const BASEAPI = {
  url: 'https://api.themoviedb.org/3',
  token: 'e21d1830443d40f00f80f974c4b84203',
  example: 'https://api.themoviedb.org/3/movie/550?api_key=e21d1830443d40f00f80f974c4b84203',
  mostPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=e21d1830443d40f00f80f974c4b84203&language=pt-BR',
  language: '&language=pt-BR',
  upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=e21d1830443d40f00f80f974c4b84203&language=en-US&page=1',
  topRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=e21d1830443d40f00f80f974c4b84203&language=en-US&page=1',
  genre: 'https://api.themoviedb.org/3/genre/movie/list?api_key=e21d1830443d40f00f80f974c4b84203&language=en-US'
  
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
