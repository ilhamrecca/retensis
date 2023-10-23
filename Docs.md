# NEWS-LOCAL API DOCS

News-Local is an app to see space news, this app has several feature:

-   Restful endpoint for CRUD operation
-   JSON Formatted response

## EndPoints Author

### POST /authors/signin

_Request Header_

    None

_Request Body_

    {
      "email": <Email> (String),
      "Password": "<Password> (String)",
    }

_Response (200)_

    {
    	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQsImlhdCI6MTY1NjQ5MDA2NX0.oyH8_R-wCzjJKalHS0NnKW_rcTqj_MEw7qzpQdX376Y"
    }

_Response (500 - Internal Server Error)_

    { name:  "Internal Server Error" }

_Response (400- Please Check Your Credential)_

    { name:  "Please Check Your Credential" }

_Response (400- SequelizeDatabaseError)_

    { name:  "SequelizeDatabaseError" }

_Response (400- SequelizeValidationError)_

    { name:  "SequelizeValidationError" }

### POST /authors/register

_Request Header_

    None

_Request Body_

    {
      "name": <name> (String),
      "email": <Email> (String),
      "Password": "<Password> (String)",
    }

_Response (200)_

    {
    	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQsImlhdCI6MTY1NjQ5MDA2NX0.oyH8_R-wCzjJKalHS0NnKW_rcTqj_MEw7qzpQdX376Y"
    }

_Response (500 - Internal Server Error)_

    { name:  "Internal Server Error" }

_Response (400- Please Check Your Credential)_

    { name:  "Please Check Your Credential" }

_Response (400- SequelizeDatabaseError)_

    { name:  "SequelizeDatabaseError" }

_Response (400- SequelizeValidationError)_

    { name:  "SequelizeValidationError" }

## EndPoints News

### GET /news

_Request Header_

    None

_Request Body_

    None

_Response (200)_

    [
        {
            "id": 3,
            "title": "Rocket to launch China’s next space station module arrives at launch center",
            "content": "<news_content>",
            "imgURL": null,
            "AuthorId": 54,
            "CategoryId": 3,
            "createdAt": "2022-06-22T07:04:19.165Z",
            "updatedAt": "2022-06-22T07:04:19.165Z",
            "Author": {
                "id": 54,
                "name": "Beaufort Binnion",
                "email": "bbinnion1h@infoseek.co.jp",
                "password": "$2a$10$Q2S1Qa8NJEpkuTtlSmkiI.tuVxrMoHOa3ZSL5PaGuWKoxnq/Zdy66",
                "createdAt": "2022-06-22T07:04:12.939Z",
                "updatedAt": "2022-06-22T07:04:12.939Z"
            },
            "Category": {
                "id": 3,
                "name": "BLACK HOLES",
                "createdAt": "2022-06-22T07:04:05.835Z",
                "updatedAt": "2022-06-22T07:04:05.835Z"
            }
        },
        {
            "id": 4,
            "title": "Against Quad? China launches satellite-based Earth observation initiative with BRICS nations",
            "content": "<news_content> ",
            "imgURL": null,
            "AuthorId": 49,
            "CategoryId": 10,
            "createdAt": "2022-06-22T07:04:19.165Z",
            "updatedAt": "2022-06-22T07:04:19.165Z",
            "Author": {
                "id": 49,
                "name": "Leah Rolingson",
                "email": "lrolingson1c@slashdot.org",
                "password": "$2a$10$pLMZ0HSPi85DoKIA5jOgtu9z8j85oZt6q8EfZOVPHN8xXoSHpDtEG",
                "createdAt": "2022-06-22T07:04:12.244Z",
                "updatedAt": "2022-06-22T07:04:12.244Z"
            },
            "Category": {
                "id": 10,
                "name": "PEOPLE, PLACES & EVENTS",
                "createdAt": "2022-06-22T07:04:05.835Z",
                "updatedAt": "2022-06-22T07:04:05.835Z"
            }
        }
    ]

_Response (500 - Internal Server Error)_

    { name:  "Internal Server Error" }

---

### GET /news/:id

_Request Header_

    currently not needed

_Request Body_

    currently not needed

_Request Params_

    id:number

_Response (200)_

    {
            "id": 3,
            "title": "Rocket to launch China’s next space station module arrives at launch center",
            "content": "<news_content>",
            "imgURL": null,
            "AuthorId": 54,
            "CategoryId": 3,
            "createdAt": "2022-06-22T07:04:19.165Z",
            "updatedAt": "2022-06-22T07:04:19.165Z",
            "Author": {
                "id": 54,
                "name": "Beaufort Binnion",
                "email": "bbinnion1h@infoseek.co.jp",
                "password": "$2a$10$Q2S1Qa8NJEpkuTtlSmkiI.tuVxrMoHOa3ZSL5PaGuWKoxnq/Zdy66",
                "createdAt": "2022-06-22T07:04:12.939Z",
                "updatedAt": "2022-06-22T07:04:12.939Z"
            },
            "Category": {
                "id": 3,
                "name": "BLACK HOLES",
                "createdAt": "2022-06-22T07:04:05.835Z",
                "updatedAt": "2022-06-22T07:04:05.835Z"
            }
        },

_Response (500 - Internal Server Error)_

    { name:  "Internal Server Error" }

_Response (400- News not found)_

    { name:  "News not found" }

---

### POST/news/

_Request Header_

    Bearer : JWT_TOKEN

_Request Body_

    {
      "title": <News Title> (String),
      "content": "<Content> (Text)",
      "imgURL": <News Image URL> (String),
      "CategoryId": <News Category Id>,
      "AuthorId": <Author Id>
    }

_Response (200)_

    {

    	"id": 4271,
    	"title": "Makan berujung makam",
    	"content": "Seorang Manusia ditemukan meninggal di sebuah rumah makan sedap",
    	"imgURL": "https://i.imgur.com/7GXiu3w.jpeg",
    	"CategoryId": 2,
    	"AuthorId": 1,
    	"updatedAt": "2022-06-22T08:38:52.584Z",
    	"createdAt": "2022-06-22T08:38:52.584Z"

    }

_Response (500 - Internal Server Error)_

    { name:  "Internal Server Error" }

_Response (400- News not found)_

    { name:  "News not found" }

_Response (400- SequelizeDatabaseError)_

    { name:  "SequelizeDatabaseError" }

_Response (400- SequelizeValidationError)_

    { name:  "SequelizeValidationError" }

_Response (401- Unauthenticated Access)_

    { name:  "Unauthenticated Access" }

_Response (401- InvalidToken)_

    { name:  "InvalidToken" }

_Response (401- Invalid Signature)_

    { name:  "Invalid Signature" }

_Response (403- Unauthorized Access)_

    { name:  "Unauthorized Access" }

### put/news/:id

_Request Header_

    Bearer : JWT_TOKEN

_Request Body_

    {
      "title": <News Title> (String),
      "content": "<Content> (Text)",
      "imgURL": <News Image URL> (String),
      "CategoryId": <News Category Id>,
      "AuthorId": <Author Id>
    }

_Request Params_

    id:number

_Response (200)_

    	{
    		"affected": 1,
    		"newData": [
    				{
    					"id": 2,
    					"title": "Makan berujung makam",
    					"content": "Seorang Manusia ditemukan meninggal di sebuah rumah makan sedap",
    					"imgURL": "https://i.imgur.com/7GXiu3w.jpeg",
    					"AuthorId": 1,
    					"CategoryId": 2,
    					"createdAt": "2022-06-22T07:04:19.165Z",
    					"updatedAt": "2022-06-22T08:41:31.818Z"
    				}
    		]
    }

_Response (500 - Internal Server Error)_

    { name:  "Internal Server Error" }

_Response (400- News not found)_

    { name:  "News not found" }

_Response (400- SequelizeDatabaseError)_

    { name:  "SequelizeDatabaseError" }

_Response (400- SequelizeValidationError)_

    { name:  "SequelizeValidationError" }

_Response (401- Unauthenticated Access)_

    { name:  "Unauthenticated Access" }

_Response (401- InvalidToken)_

    { name:  "InvalidToken" }

_Response (401- Invalid Signature)_

    { name:  "Invalid Signature" }

_Response (403- Unauthorized Access)_

    { name:  "Unauthorized Access" }

### patch/news/:id

_Request Header_

    Bearer : JWT_TOKEN

_Request Body_

    {
      "imgURL": <News Image URL> (String),
    }

_Request Params_

    id:number

_Response (200)_

    	{
    		"affected": 1
    	}

_Response (500 - Internal Server Error)_

    { name:  "Internal Server Error" }

_Response (400- News not found)_

    { name:  "News not found" }

_Response (401- Unauthenticated Access)_

    { name:  "Unauthenticated Access" }

_Response (401- InvalidToken)_

    { name:  "InvalidToken" }

_Response (401- Invalid Signature)_

    { name:  "Invalid Signature" }

_Response (403- Unauthorized Access)_

    { name:  "Unauthorized Access" }

### patch/news/:id

_Request Header_

    Bearer : JWT_TOKEN

_Request Body_

    currently not needed

_Request Params_

    id:number

_Response (200)_

    	{
    		"message": "News Successfully Deleted"
    	}

_Response (500 - Internal Server Error)_

    { name:  "Internal Server Error" }

_Response (400- News not found)_

    { name:  "News not found" }

_Response (401- Unauthenticated Access)_

    { name:  "Unauthenticated Access" }

_Response (401- InvalidToken)_

    { name:  "InvalidToken" }

_Response (401- Invalid Signature)_

    { name:  "Invalid Signature" }

_Response (403- Unauthorized Access)_

    { name:  "Unauthorized Access" }
