const fs = require("fs");

function replace(location) {
    const content = fs
        .readFileSync(location, "utf8")
        .split("assert")
        .join("validate");
    if (location.indexOf("assert") !== -1) {
        fs.unlinkSync(location);
        location = location.replace("assert", "validate");
    }
    fs.writeFileSync(location, content, "utf8");
}
function main() {
    const directory = fs.readdirSync(__dirname);
    for (const file of directory)
         if (file[0] !== "_" && file.substr(-3) === ".ts")
            replace(__dirname + "/" + file);
}
main();