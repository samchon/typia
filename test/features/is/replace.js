const fs = require("fs");

function replace(path) {
    const content = fs.readFileSync(path, 'utf8');

    const [target, first, last] = (() => {
        const last = content.indexOf(".generate");
        const first = content.lastIndexOf("    ", last);
        
        return [
            content.substring(first, last),
            content.indexOf("[", first),
            content.lastIndexOf("],")
        ];
    })();
    if (first === -1 || last === -1) return;

    const updated = content.substring(0, first)
        + `${target}.SPOILERS`
        + content.substring(last + 1);
    fs.writeFileSync(path, updated, "utf8");
}

const directory = fs.readdirSync(__dirname);
for (const file of directory)
    if (file.substr(-3) === ".ts" && file !== "_test_is.ts")
        replace(`${__dirname}/${file}`);