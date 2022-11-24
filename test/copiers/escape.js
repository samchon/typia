const cp = require("child_process");
const fs = require("fs");

function copy(from, to, method) {
    const content = fs.readFileSync(from, "utf8");
    const replaced = ((content) => {
        const factory = [
            "TSON.create",
            method[0].toUpperCase(),
            method.substr(1)
        ].join("");
        const start = content.indexOf(factory);
        if (start === -1) {
            console.log(from.replace(`${__dirname}/../features/`, ""));
            return content;
        }
        const last = content.indexOf(">()", start);
        return [
            content.substring(0, start).replace("create_", ""),
            `(input) => TSON.${method}(input)`,
            content.substring(last + 3)
        ].join("")
    })(content);

    fs.writeFileSync(to, replaced, "utf8");
}

function replica(name, method = name) {
    const from = `${__dirname}/../features/create_${name}`;
    const to = `${__dirname}/../features/${name}`;

    if (fs.existsSync(to)) cp.execSync(`npx rimraf ${to}`);
    fs.mkdirSync(to);

    for (const file of fs.readdirSync(from))
        if (file.substr(-3) === ".ts" && file[0] !== "_")
            copy(
                `${from}/${file}`, 
                `${to}/${file.replace("create_", "")}`, 
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