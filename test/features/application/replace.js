const cp = require("child_process");
const fs = require("fs");

function getSchema(content) {
    const first = content.indexOf("schemas: [");
    const last = content.indexOf("}, {");

    return "{" + content.substring(first, last) + "}";
}

function replace(type, file, schema) {
    const content = fs.readFileSync(file, "utf8");
    const symbol = `], "${type}">(),`;
    const first = content.indexOf(symbol);

    const newContent =
        content.substring(0, first) + symbol + schema + "\n" + ");";
    fs.writeFileSync(file, newContent, "utf8");
}

function iterate(type) {
    for (const file of fs.readdirSync(`${__dirname}/${type}`)) {
        if (file.substr(-3) !== ".ts" || file === `_test_application_${type}.ts`)
            continue;

        const location = `${__dirname}/${type}/${file}`;
        const jsLocation =
            __dirname +
            `/../../../bin/test/features/application/${type}/${file.slice(0, -3)}.js`;
        const schema = getSchema(fs.readFileSync(jsLocation, "utf8"));
        replace(type, location, schema);
    }
}

function main() {
    cp.execSync("npx rimraf bin");
    cp.execSync("npx ttsc -p tsconfig.test.json");
    
    iterate("ajv");
    iterate("swagger");
}
main();
