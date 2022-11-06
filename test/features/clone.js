const fs = require("fs");

const EXCEPTIONS = ["functional", "namespace", "non_public", "undefined", "dynamic_composite"]

function copy(path) {
    try {
        fs.rm(`${__dirname}/${path.replace("stringify", "clone")}`, { recursive: true });
    }
    catch {}
    fs.mkdirSync(`${__dirname}/${path.replace("stringify", "clone")}`);
    
    for (const file of fs.readdirSync(`${__dirname}/${path}`)) {
        if (file[0] === "_") continue;
        else if (EXCEPTIONS.some(exp => file.indexOf(exp) !== -1)) continue;

        const from = `${__dirname}/${path}/${file}`;
        const content = fs.readFileSync(from, "utf-8");

        fs.writeFileSync(
            `${__dirname}/${`${path}/${file}`.split("stringify").join("clone")}`,
            content
                .split("stringify").join("clone")
                .split("Stringify").join("Clone"),
            "utf8"
        );
    }

}

function main() {
    copy("stringify");
    copy("is_stringify");
    copy("assert_stringify");
    copy("create_stringify");
    copy("create_is_stringify");
    copy("create_assert_stringify");
}
main();