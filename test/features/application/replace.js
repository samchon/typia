const cp = require("child_process");
const fs = require("fs");

function getSchema(content) {
    const first = content.indexOf("schemas: [");
    const last = content.indexOf("}, {");

    return "{" + content.substring(first, last) + "}";
}

function replace(file, schema) {
    const content = fs.readFileSync(file, "utf8");
    const symbol = content.indexOf("]>(),") !== -1
        ? "]>(),"
        : `], "ajv">(),`;
    const first = content.indexOf(symbol);

    const newContent =
        content.substring(0, first) + symbol + schema + "\n" + ");";
    fs.writeFileSync(file, newContent, "utf8");
}

function main() {
    cp.execSync("npx rimraf bin");
    cp.execSync("npx ttsc -p tsconfig.test.json");
    
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
