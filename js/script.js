"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

for (let i = 0; i < 2; i++) {
    let question = prompt('Один из последних просмотренных фильмов?',''),
        percent = prompt('На сколько оцените его?','');
    if (question == null || percent == null || question.length == 0 || question.length > 50 || percent.length == 0) {
        question = prompt('Один из последних просмотренных фильмов?','');
        percent = prompt('На сколько оцените его?','');
    } else {
        personalMovieDB.movies[question] = percent;
    }
    personalMovieDB.movies[question] = percent;
}


console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}