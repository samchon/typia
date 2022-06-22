const fs = require("fs");

function getSchema(content) {
    const first = content.indexOf("schemas: [");
    const last = content.indexOf("}, {");

    return "{" + content.substring(first, last) + "}";
}

function replace(file, schema) {
    const content = fs.readFileSync(file, "utf8");
    const first = content.indexOf("]>(),");

    const newContent =
        content.substring(0, first) + "]>(),\n" + schema + "\n" + ");";
    fs.writeFileSync(file, newContent, "utf8");
}

function main() {
    for (const file of fs.readdirSync(__dirname)) {
        if (file.substr(-3) !== ".ts" || file === "_test_application.ts")
            continue;

        const location = __dirname + "/" + file;
        const jsLocation =
            __dirname +
            `/../../../bin/test/features/application/${file.slice(0, -3)}.js`;
        const schema = getSchema(fs.readFileSync(jsLocation, "utf8"));
        replace(location, schema);
    }
}
main();
