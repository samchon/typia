"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentParser = void 0;
const commander_1 = __importDefault(require("commander"));
const inquirer_1 = __importDefault(require("inquirer"));
var ArgumentParser;
(function (ArgumentParser) {
    ArgumentParser.parse = (pack, inquiry) => __awaiter(this, void 0, void 0, function* () {
        // TAKE OPTIONS
        const action = (closure) => new Promise((resolve, reject) => {
            commander_1.default.program.action((options) => __awaiter(this, void 0, void 0, function* () {
                try {
                    resolve(yield closure(options));
                }
                catch (exp) {
                    reject(exp);
                }
            }));
            commander_1.default.program.parseAsync().catch(reject);
        });
        return inquiry(pack, commander_1.default.program, inquirer_1.default.createPromptModule, action);
    });
})(ArgumentParser || (exports.ArgumentParser = ArgumentParser = {}));
//# sourceMappingURL=ArgumentParser.js.map