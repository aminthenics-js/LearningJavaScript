
     const discordUser = new Object();
     
     discordUser.id = "streamer238"
     discordUser.name = "Samual"
     discordUser.isLoggedIn = true

     //console.log(discordUser);
     

     const regularUser = {
        email: "aminthenics@google.com",
        fullName: {
            userName: {
                firstName: "Amin",
                lastName: "Thenics"
            }
        }
     }


     //console.log(regularUser.fullName);
     //console.log(regularUser.fullName.userName);
     //console.log(regularUser.fullName.userName.lastName);
     


    const firstObject1 = {1: "a", 2: "b"};
    const secondObject = {3: "c", 4: "d"};
    const thirdObject = {5: "e", 6: "f"};

    

//    const mergeObject = Object.assign({}, firstObject1, secondObject, thirdObject);

  //  console.log(mergeObject);
    
  const mergeObject = {...firstObject1, ...secondObject, ...thirdObject};  //Preferred
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
    