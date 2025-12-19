
     const discordUser = new Object();
     
     discordUser.id = "streamer238"
     discordUser.name = "Samual"
     discordUser.isLoggedIn = true

     console.log(discordUser);
     

     const regularUser = {
        email: "aminthenics@google.com",
        fullName: {
            userName: {
                firstName: "Amin",
                lastName: "Thenics"
            }
        }
     }


     console.log(regularUser.fullName);
     console.log(regularUser.fullName.userName);
     console.log(regularUser.fullName.userName.lastName);
     


    const firstObject1 = {1: "a", 2: "b"};
    const secondObject = {3: "c", 4: "d"};
    const thirdObject = {5: "e", 6: "f"};

    

   const mergeObject = Object.assign({}, firstObject1, secondObject, thirdObject);

   console.log(mergeObject);
    
  //const mergeObject = {...firstObject1, ...secondObject, ...thirdObject};  //Preferred
  console.log(mergeObject);



    const users = [
        {
        id: 1,
        email: "abc@gmail.com"
        },
        {
        id: 2,
        email: "efg@gmail.com"
        },
        {
        id: 3,
        email: "hij@gmail.com"
        },
    ]


   console.log(users[2].email);

    console.log(discordUser);
    
    console.log(Object.keys(discordUser));
    console.log(Object.values(discordUser));
    console.log(Object.entries(discordUser));
    

    console.log(discordUser.hasOwnProperty('isLoggedIn'));
    console.log(discordUser.hasOwnProperty('LoggedIn'));
    










                          








           // OBJECT DESTRUCTURING (brief introduction) :-


const course = {
    courseName: "JS for beginners",
    coursePrice: "949",
    courseInstructor: "Hitesh sir"
};


const {courseName} = course;
console.log(courseName);

const {courseInstructor: author} = course;
console.log(author);






                   //     JSON - JavaScript Object Notation
/*
    {
        "name": "Aminthenics",
        "courseName": "JavaScript course",
        "price: "free"
    };


    {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

*/