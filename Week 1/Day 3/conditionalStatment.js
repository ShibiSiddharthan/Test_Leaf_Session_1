//Assessment 1
function launchBrowser(browser){
    if (browser == "chrome"){
        console.log("launching chrome");
    
    }
    else if (browser == "firefox"){
        console.log("launching firefox");
    }
    else{
        console.log("browser not supported");
    }
}
launchBrowser("edge")


//Assessment 2

function runTests(testType){
    switch(testType){
        case "smoke test":
            console.log("Running smoke test");
            break;
            case "regression test":
                console.log("Running regression test");
                break;
            case "functional test": 
            console.log("Running functional test");
            break;
            default:
                console.log("Test type not supported");
    }
}
runTests("smoke test")