#!/usr/bin/env node
import { TypiaGenerateWizard } from "./TypiaGenerateWizard";
import { TypiaSetupWizard } from "./TypiaSetupWizard";

const USAGE = `Wrong command has been detected. Use like below:

  npx typia setup \\
    --compiler (ttypescript|ts-patch) \\
    --manager (npm|pnpm|yarn) \\
    --project {tsconfig.json file path}

    - npx typia setup
    - npx typia setup --compiler ts-patch
    - npx typia setup --manager pnpm
    - npx typia setup --project tsconfig.test.json

  npx typia generate 
    --input {directory} \\
    --output {directory}

    --npx typia generate --input src/templates --output src/functinoal
`;

function halt(desc: string): never {
    console.error(desc);
    process.exit(-1);
}

async function main(): Promise<void> {
    const type: string | undefined = process.argv[2];
    if (type === "setup") await TypiaSetupWizard.setup();
    else if (type === "generate") await TypiaGenerateWizard.generate();
    else halt(USAGE);
}
main().catch((exp) => {
    console.error(exp);
    process.exit(-1);
});
