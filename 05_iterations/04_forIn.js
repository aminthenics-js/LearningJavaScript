        // for...in loop (key-based)

    const myLang = {
        js: "JavaScript",
        py: "Python",
        rb: "Ruby",
        swift: "Swift by apple",
        rs: "Rust",
        cpp: "C++"
    };


    for (const key in myLang) {
        console.log(`${key} shortcut is for ${myLang[key]}`);
    }



    const programmingLang = ["js", "py", "rb", "swift", "rs", "cpp"];

    for (const key in programmingLang) {
        console.log(programmingLang[key]);
    }


    