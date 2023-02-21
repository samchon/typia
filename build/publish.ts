import cp from "child_process";
import fs from "fs";

import { ReplicaPublisher } from "./internal/ReplicaPublisher";

function execute(command: string): void {
    console.log(command);
    cp.execSync(command, { stdio: "inherit" });
}

function publish(tag: string): void {
    // LOAD PACKAGE.JSON CONTENT
    const pack: any = JSON.parse(
        fs.readFileSync(`${__dirname}/../package.json`, "utf8"),
    );
    if (tag === "next" && pack.version.includes("-dev.") === -1)
        throw new Error("next tag can only be used for dev versions.");

    // REMOVE PRIVATE FOR PUBLISHING
    delete pack.private;
    fs.writeFileSync(
        `${__dirname}/../package.json`,
        JSON.stringify(pack, null, 2),
        "utf8",
    );
    try {
        cp.execSync(`npm publish --tag ${tag}`);
    } catch {}

    // RESTORE PRIVATE PROPERTY
    pack.private = true;
    fs.writeFileSync(
        `${__dirname}/../package.json`,
        JSON.stringify(pack, null, 2),
        "utf8",
    );
}

function main(): void {
    const tag: string | undefined = process.argv[2];
    if (tag === undefined) {
        console.log("specify tag name like latest or next");
        process.exit(-1);
    }

    // BUILD AND TEST
    process.chdir(__dirname + "/..");
    execute("npm run build");
    execute("npm run build:test");
    execute("npm run test");
    publish(tag);

    // MAKE REPLICA REPO
    ReplicaPublisher.replica(tag);
}
main();
