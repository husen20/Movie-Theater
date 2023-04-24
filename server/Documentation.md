# Warteg Zone API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `/movies/home`
- `/movies/home/tvShow`
- `/movies/home/topAiring`
- `/movies/home/forKids`
- `/movies/home/:id`
- `/movies/home/trailers/:id`
- `/paymen`
- `/payment/status/:id`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "password": "string",
  "username": "string",
  "profile_picture": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Email has been created successfully"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Must be a valid email address"
}
OR
{
    "message": "E-mail already in use"
}
OR
{
    "message": "Email cannot be empty"
}
OR
{
    "message": "Password cannot be empty"
}
OR
{
    "message": "Password must be more than 4"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email or password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email or password"
}
```

&nbsp;

## 3. GET /foods

Description:

- Get all Movies from API

_Response (200 - OK)_

```json
[
  {
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/A5JyEZvXHbPLN2cU65oB9NaIuYH.jpg",
        "id": 768362,
        "title": "Missing",
        "original_language": "en",
        "original_title": "Missing",
        "overview": "When her mother disappears while on vacation in Colombia with her new boyfriend, June’s search for answers is hindered by international red tape. Stuck thousands of miles away in Los Angeles, June creatively uses all the latest technology at her fingertips to try and find her before it’s too late. But as she digs deeper, her digital sleuthing raises more questions than answers... and when June unravels secrets about her mom, she discovers that she never really knew her at all.",
        "poster_path": "https://image.tmdb.org/t/p/w500/wEOUYSU5Uf8J7152PT6jdb5233Y.jpg",
        "media_type": "movie",
        "genre_ids": [
            53,
            9648,
            18,
            27
        ],
        "popularity": 134.015,
        "release_date": "2023-01-19",
        "video": false,
        "vote_average": "7.7",
        "vote_count": 84
    },
  ...,
]
```

&nbsp;

## 4. GET /movies/home/tvShow

Description:

- Get Movies from API

_Response (200 - OK)_

```json
[
  {
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
        "id": 1429,
        "name": "Attack on Titan",
        "original_language": "ja",
        "original_name": "進撃の巨人",
        "overview": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
        "poster_path": "https://image.tmdb.org/t/p/w500/sHim6U0ANsbzxcmNRYuIubBVQaz.jpg",
        "media_type": "tv",
        "genre_ids": [
            10765,
            16,
            10759
        ],
        "popularity": 288.966,
        "first_air_date": "2013-04-07",
        "vote_average": "8.6",
        "vote_count": 5007,
        "origin_country": [
            "JP"
        ]
    },
  ...,
]
```

&nbsp;

## 5. GET /movies/home/topAiring

_Response (200 - OK)_

```json
[
  {
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
        "id": 1429,
        "name": "Attack on Titan",
        "original_language": "ja",
        "original_name": "進撃の巨人",
        "overview": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
        "poster_path": "https://image.tmdb.org/t/p/w500/sHim6U0ANsbzxcmNRYuIubBVQaz.jpg",
        "media_type": "tv",
        "genre_ids": [
            10765,
            16,
            10759
        ],
        "popularity": 288.966,
        "first_air_date": "2013-04-07",
        "vote_average": "8.6",
        "vote_count": 5007,
        "origin_country": [
            "JP"
        ]
    },
  ...,
]
```

&nbsp;

## 6. GET /movies/home/forKids

_Response (200 - OK)_

```json
[
  {
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
        "id": 1429,
        "name": "Attack on Titan",
        "original_language": "ja",
        "original_name": "進撃の巨人",
        "overview": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
        "poster_path": "https://image.tmdb.org/t/p/w500/sHim6U0ANsbzxcmNRYuIubBVQaz.jpg",
        "media_type": "tv",
        "genre_ids": [
            10765,
            16,
            10759
        ],
        "popularity": 288.966,
        "first_air_date": "2013-04-07",
        "vote_average": "8.6",
        "vote_count": 5007,
        "origin_country": [
            "JP"
        ]
    },
  ...,
]
```

&nbsp;

## 7. GET /movies/home/:id

Description:

- GET Movie by id

Request:

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
  {
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
        "id": 1429,
        "name": "Attack on Titan",
        "original_language": "ja",
        "original_name": "進撃の巨人",
        "overview": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
        "poster_path": "https://image.tmdb.org/t/p/w500/sHim6U0ANsbzxcmNRYuIubBVQaz.jpg",
        "media_type": "tv",
        "genre_ids": [
            10765,
            16,
            10759
        ],
        "popularity": 288.966,
        "first_air_date": "2013-04-07",
        "vote_average": "8.6",
        "vote_count": 5007,
        "origin_country": [
            "JP"
        ]
    },
```

_Response (404 - Not Found)_

```json
{
  "message": "File not found"
}
```

&nbsp;

## 8. GET /movies/home/trailers/:id

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
[
  {
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
        "id": 1429,
        "name": "Attack on Titan",
        "original_language": "ja",
        "original_name": "進撃の巨人",
        "overview": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
        "poster_path": "https://image.tmdb.org/t/p/w500/sHim6U0ANsbzxcmNRYuIubBVQaz.jpg",
        "media_type": "tv",
        "genre_ids": [
            10765,
            16,
            10759
        ],
        "popularity": 288.966,
        "first_air_date": "2013-04-07",
        "vote_average": "8.6",
        "vote_count": 5007,
        "origin_country": [
            "JP"
        ]
    },
  ...,
]
```

_Response (404 - Not Found)_

```json
{
  "message": "File not found"
}
```

&nbsp;

## 9. POST /paymen

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (201 - created)_

```json
{
  "midtrans": "transaction",
  "ticket": "ticket.id"
}
```

&nbsp;

## 10. PATCH /payment/status/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - ok)_

```json
{
  "message": "payment successfull"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
