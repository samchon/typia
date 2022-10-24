const fs = require("fs");

function has_spoiler(type) {
    const content = fs.readFileSync(`${__dirname}/../../structures/${type}.ts`, "utf8");
    return content.indexOf("SPOILERS") !== -1;
}

function copy(file) {
    let content = fs.readFileSync(`${__dirname}/../stringify/${file}`, "utf8");
    content = content
        .split("test_stringify").join("test_assert_stringify")
        .split("TSON.stringify").join("TSON.assertStringify");

    const index = content.indexOf(".generate,");
    if (index !== -1) {
        const type = content.substring(
            content.lastIndexOf(" ", index) + 1,
            index
        );
        if (has_spoiler(type) === true) {
            const pos = content.lastIndexOf(",");
            content = content.substring(0, pos) + 
                `,\n    ${type}.SPOILERS` +
                content.substring(pos);
        }
    }
    fs.writeFileSync(
        `${__dirname}/${file.replace("stringify", "assert_stringify")}`, 
        content, 
        "utf8"
    );
}

const directory = fs.readdirSync(__dirname + "/../stringify");
for (const file of directory)
    if (file[0] !== "_" && file.substr(-3) === ".ts")
        copy(file);