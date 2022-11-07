const cp = require("child_process");
const fs = require("fs");

function copy(from, to, name, method) {
    let content = fs.readFileSync(`${__dirname}/../features/${from}`, "utf8");
    const [structure, isClass] = (() => {
        const last = content.indexOf(".generate");
        if (last === -1) {
            const prev = content.lastIndexOf(`",`);
            const last = content.substring(prev).indexOf("] as const") !== -1
                ? content.indexOf(" as const", prev + 2)
                : content.indexOf(",\n", prev + 2);
            const first = content[last - 1] !== "]" 
                ? content.lastIndexOf(" ", last)
                : content.lastIndexOf(" [", last);
            return [content.substring(first + 1, last), false];
        }
        const first = content.lastIndexOf("    ", last);
        return [content.substring(first, last), true];
    })();
    const type = isClass || structure[0] === "["
        ? structure
        : `typeof ${structure}`;
    
    if (type[0] === "[")
        content = content.replace(" as const", "");
    content = content.replace(`export const test_`, `export const test_create_`);
    content = content.replace(`./_test`, `./../${name}/_test`);
    content = content.replace(
        `(input) => TSON.${method}(input)`,
        `TSON.create${method[0].toUpperCase()}${method.substr(1)}<${type}>()`
    );
    fs.writeFileSync(`${__dirname}/../features/${to}`, content, "utf8");
}

function replica(name, method = name) {
    const from = `${__dirname}/${name}`;
    const to = `${__dirname}/create_${name}`;

    if (fs.existsSync(to)) cp.execSync(`npx rimraf ${to}`);
    fs.mkdirSync(to);

    for (const file of fs.readdirSync(from))
        if (file.substr(-3) === ".ts" && file[0] !== "_")
            copy(
                `${from}/${file}`, 
                `${to}/test_create_${file.substring(5)}`, 
                name, 
                method
            );
}
replica("assert", "assert");
replica("is");
replica("validate");

replica("assert_equals", "assertEquals");
replica("equals");
replica("validate_equals", "validateEquals");

replica("stringify");
replica("assert_stringify", "assertStringify");
replica("is_stringify", "isStringify");