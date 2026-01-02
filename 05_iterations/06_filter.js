             // Filter method

    const coding = ["js", "ruby", "java", "python", "cpp"];

    const values = coding.forEach((item) => {
        console.log(item);
    });

    // console.log(values);
    

    const myNums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    const newNums = myNums.filter( function(num) {
        return num >= 7;
    });

    console.log(newNums);


    
    const aboutBooks = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
    

  const booksUser = aboutBooks.filter( (book) => {
      return book.genre === "Non-Fiction";
  });

  console.log(booksUser);
  

  const userBook = aboutBooks.filter( (bookOne) => {
    return bookOne.publish >= 1999 && bookOne.genre === "Science";
  })

  console.log(userBook);
  