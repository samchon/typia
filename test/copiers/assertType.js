const fs = require("fs");

function copy(path, method) {
    // PREPARE NEW DIRECTORY
    from = `${__dirname}/../features/${path}`;
    to = `${__dirname}/../features/${path}_type`;
    try {
        fs.rmSync(to, { recursive: true })
    }
    catch {}
    fs.mkdirSync(to);

    for (const file of fs.readdirSync(from)){
        const content = fs.readFileSync(`${from}/${file}`, "utf-8");
        const replaced = content
            .split("_assert").join("_assert_type")
            .split("assert/").join("assert_type/")
            .split(`TSON.${method}`).join(`TSON.${method}Type`);
        fs.writeFileSync(
            `${to}/${file.replace("assert", "assert_type")}`, 
            replaced, 
            "utf8"
        );
    }
}

copy("assert", "assert");
copy("create_assert", "createAssert");