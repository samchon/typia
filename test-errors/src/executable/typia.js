#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const USAGE = `Wrong command has been detected. Use like below:

  npx typia setup \\
    --manager (npm|pnpm|yarn) \\
    --project {tsconfig.json file path}

    - npx typia setup
    - npx typia setup --manager pnpm
    - npx typia setup --project tsconfig.test.json

  npx typia generate 
    --input {directory} \\
    --output {directory}

    --npx typia generate --input src/templates --output src/functinoal
`;
const halt = (desc) => {
    console.error(desc);
    process.exit(-1);
};
const main = async () => {
    try {
        await Promise.resolve().then(() => __importStar(require("comment-json")));
        await Promise.resolve().then(() => __importStar(require("inquirer")));
        await Promise.resolve().then(() => __importStar(require("commander")));
    }
    catch {
        halt(`typia has not been installed. Run "npm i typia" before.`);
    }
    const type = process.argv[2];
    if (type === "setup") {
        const { TypiaSetupWizard } = await Promise.resolve().then(() => __importStar(require("./TypiaSetupWizard")));
        await TypiaSetupWizard.setup();
    }
    else if (type === "generate") {
        try {
            await Promise.resolve().then(() => __importStar(require("typescript")));
        }
        catch {
            halt(`typescript has not been installed. Run "npm i -D typescript" before.`);
        }
        const { TypiaGenerateWizard } = await Promise.resolve().then(() => __importStar(require("./TypiaGenerateWizard")));
        await TypiaGenerateWizard.generate();
    }
    else
        halt(USAGE);
};
main().catch((exp) => {
    console.error(exp);
    process.exit(-1);
});
