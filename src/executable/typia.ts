#!/usr/bin/env node
import { CommandParser } from "./internal/CommandParser";
import { TypiaSetupWizard } from "./internal/TypiaSetupWizard";

const USAGE = `Wrong command has been detected. Use like below:

  npx typia setup \\
    --compiler (ttypescript|ts-patch) \\
    --manager (npm|pnpm|yarn)
    --project {tsconfig.json file path}

  - npx typia setup
  - npx typia setup --compiler ts-patch
  - npx typia setup --manager pnpm
  - npx typia setup --project tsconfig.test.json`;

function halt(desc: string): never {
    console.error(desc);
    process.exit(-1);
}

async function setup(): Promise<void> {
    const options: Record<string, string> = CommandParser.parse(
        process.argv.slice(3),
    );
    const manager: string = options.manager ?? "npm";
    const compiler: string = options.compiler ?? "ttypescript";
    const project: string = options.project ?? "tsconfig.json";

    if (
        (compiler !== "ttypescript" && compiler !== "ts-patch") ||
        (manager !== "npm" && manager !== "pnpm" && manager !== "yarn")
    )
        halt(USAGE);
    else if (compiler === "ttypescript")
        await TypiaSetupWizard.ttypescript({ manager, project });
    else await TypiaSetupWizard.tsPatch({ manager, project });
}

async function main(): Promise<void> {
    const type: string | undefined = process.argv[2];
    if (type === "setup") await setup();
    else halt(USAGE);
}
main().catch((exp) => {
    console.error(exp);
    process.exit(-1);
});
