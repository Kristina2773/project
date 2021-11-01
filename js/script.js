"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?',''); 
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const question = prompt('Один из последних просмотренных фильмов?',''),
                percent = prompt('На сколько оцените его?','');
    
            if (question != null && percent != null && question != '' && percent != '' && question.length < 50) {
                personalMovieDB.movies[question] = percent;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibileMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let likeGenres = prompt(`Ваш любимый жанр по номером ${i}`,'');
            if (likeGenres != null && likeGenres != '') {
                personalMovieDB.genres[i - 1] = likeGenres;
            } else {
                console.log("Вы ввели некорректное значение или не ввели вовсе");
                i--;
            }
        }
        
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });
    },
};



