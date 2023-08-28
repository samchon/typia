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
    const dev: boolean = pack.version.includes("-dev.");
    if ((tag === "next" || tag === "patch") && !dev)
        throw new Error(`${tag} tag can only be used for dev versions.`);
    else if (tag === "latest" && dev)
        throw new Error("latest tag can only be used for non-dev versions.");

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
    execute("npm run test:errors");
    execute("npm run test");
    publish(tag);

    // MAKE REPLICA REPO
    ReplicaPublisher.replica(tag);
}
main();
