import movies from "./Movies"
 export default class MovieServices {
     static getMovies(){
         return movies ? movies :[];
     }
 }