"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypiaGenerateWizard = void 0;
const fs_1 = __importDefault(require("fs"));
const TypiaProgrammer_1 = require("../programmers/TypiaProgrammer");
const ArgumentParser_1 = require("./setup/ArgumentParser");
const PackageManager_1 = require("./setup/PackageManager");
var TypiaGenerateWizard;
(function (TypiaGenerateWizard) {
    async function generate() {
        console.log("----------------------------------------");
        console.log(" Typia Generate Wizard");
        console.log("----------------------------------------");
        // LOAD PACKAGE.JSON INFO
        const pack = await PackageManager_1.PackageManager.mount();
        const options = await ArgumentParser_1.ArgumentParser.parse(pack)(inquiry);
        await TypiaProgrammer_1.TypiaProgrammer.build(options);
    }
    TypiaGenerateWizard.generate = generate;
    const inquiry = async (_pack, command, prompt, action) => {
        // PREPARE ASSETS
        command.option("--input [path]", "input directory");
        command.option("--output [directory]", "output directory");
        command.option("--project [project]", "tsconfig.json file location");
        const questioned = { value: false };
        const input = (name) => async (message) => {
            const result = await prompt()({
                type: "input",
                name,
                message,
                default: "",
            });
            return result[name];
        };
        const select = (name) => (message) => async (choices) => {
            questioned.value = true;
            return (await prompt()({
                type: "list",
                name: name,
                message: message,
                choices: choices,
            }))[name];
        };
        const configure = async () => {
            const files = await (await fs_1.default.promises.readdir(process.cwd())).filter((str) => str.substring(0, 8) === "tsconfig" &&
                str.substring(str.length - 5) === ".json");
            if (files.length === 0)
                throw new URIError(`Unable to find "tsconfig.json" file.`);
            else if (files.length === 1)
                return files[0];
            return select("tsconfig")("TS Config File")(files);
        };
        return action(async (options) => {
            options.input ??= await input("input")("input directory");
            options.output ??= await input("output")("output directory");
            options.project ??= await configure();
            return options;
        });
    };
})(TypiaGenerateWizard || (exports.TypiaGenerateWizard = TypiaGenerateWizard = {}));
