"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

const firstQuestion = prompt('Один из последних просмотренных фильмов?',''),
    firstPercent = prompt('На сколько оцените его?',''),
    secondQuestion = prompt('Один из последних просмотренных фильмов?',''),
    secondPercent = prompt('На сколько оцените его?','');

personalMovieDB.movies[firstQuestion] = firstPercent;
personalMovieDB.movies[secondQuestion] = secondPercent;

console.log(personalMovieDB);
