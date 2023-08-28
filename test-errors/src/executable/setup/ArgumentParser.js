"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentParser = void 0;
const commander_1 = __importDefault(require("commander"));
const inquirer_1 = __importDefault(require("inquirer"));
var ArgumentParser;
(function (ArgumentParser) {
    ArgumentParser.parse = (pack) => async (inquiry) => {
        // TAKE OPTIONS
        const action = (closure) => new Promise((resolve, reject) => {
            commander_1.default.program.action(async (options) => {
                try {
                    resolve(await closure(options));
                }
                catch (exp) {
                    reject(exp);
                }
            });
            commander_1.default.program.parseAsync().catch(reject);
        });
        return inquiry(pack, commander_1.default.program, inquirer_1.default.createPromptModule, action);
    };
})(ArgumentParser || (exports.ArgumentParser = ArgumentParser = {}));
