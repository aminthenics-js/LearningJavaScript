        // forEach

    const coding = ["js", "py", "rb", "swift", "rs", "cpp"];

    coding.forEach(function(val){
        console.log(val);
    })

    coding.forEach((item) => {
        console.log(item);
    })

    function printMe(item){
        console.log(item);
    }

    coding.forEach(printMe);

    coding.forEach((item, index, arr) => {
        console.log(item, index, arr);
    })



    const myCodingLang = [
        {
            langName: "JavaScript",
            langFile: ".js"
        },
        {
            langName: "Rust",
            langFile: ".rs"
        },
        {
            langName: "Python",
            langFile: ".py"
        },
        {
            langName: "Java",
            langFile: ".java"
        }
    ];

    myCodingLang.forEach((item) => {
        console.log(item.langName);
        console.log(item.langFile);
    })