const fs = require("fs");
let frcontent = `{"words": [`;

fs.readFile("./french", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    const array = data.split("\n");
    array.forEach((e) => {
        const line = e.split("\t");
        // console.log(line);
        frcontent += `{"position": ${line[0]}, "foreign": "${line[1]}", "english": "${line[2]}","code":"FR"},`;
    });
    frcontent += "]}";
    fs.writeFile("./0french.json", frcontent, (err) => {
        if (err) {
            console.log(err);
        }
    });
});

let itacontent = `{"words": [`;

fs.readFile("./italian", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    const array = data.split("\n");
    array.forEach((e) => {
        const line = e.split("\t");
        // console.log(line);
        itacontent += `{"position": ${line[0]}, "foreign": "${line[1]}", "english": "${line[2]}","code":"ITA"},`;
    });
    itacontent += "]}";
    fs.writeFile("./0italian.json", itacontent, (err) => {
        if (err) {
            console.log(err);
        }
    });
});

let porcontent = `{"words": [`;

fs.readFile("./portugese", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    const array = data.split("\n");
    array.forEach((e) => {
        const line = e.split("\t");
        // console.log(line);
        porcontent += `{"position": ${line[0]}, "foreign": "${line[1]}", "english": "${line[2]}","code":"POR"},`;
    });
    porcontent += "]}";
    fs.writeFile("./0portugese.json", porcontent, (err) => {
        if (err) {
            console.log(err);
        }
    });
});

let spacontent = `{"words": [`;

fs.readFile("./spanish", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    const array = data.split("\n");
    array.forEach((e) => {
        const line = e.split("\t");
        // console.log(line);
        spacontent += `{"position": ${line[0]}, "foreign": "${line[1]}", "english": "${line[2]}","code":"SPA"},`;
    });
    spacontent += "]}";
    fs.writeFile("./0spanish.json", spacontent, (err) => {
        if (err) {
            console.log(err);
        }
    });
});
