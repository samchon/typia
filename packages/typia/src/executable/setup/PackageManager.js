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
exports.PackageManager = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const CommandExecutor_1 = require("./CommandExecutor");
const FileRetriever_1 = require("./FileRetriever");
class PackageManager {
    get file() {
        return path_1.default.join(this.directory, "package.json");
    }
    static mount() {
        return __awaiter(this, void 0, void 0, function* () {
            const location = yield FileRetriever_1.FileRetriever.directory({
                file: "package.json",
                location: process.cwd(),
            });
            if (location === null)
                throw new URIError(`Unable to find "package.json" file`);
            return new PackageManager(location, yield this.load(path_1.default.join(location, "package.json")));
        });
    }
    save(modifier) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield fs_1.default.promises.readFile(this.file, "utf8");
            this.data = JSON.parse(content);
            modifier(this.data);
            return fs_1.default.promises.writeFile(this.file, JSON.stringify(this.data, null, 2), "utf8");
        });
    }
    install(props) {
        const middle = [
            installCmdTable[this.manager],
            props.dev ? devOptionTable[this.manager] : "",
        ]
            .filter((str) => !!str.length)
            .join(" ");
        const modulo = `${props.modulo}${props.version ? `@${props.version}` : ""}`;
        CommandExecutor_1.CommandExecutor.run([this.manager, middle, modulo].join(" "));
        return true;
    }
    constructor(directory, data) {
        this.directory = directory;
        this.data = data;
        this.manager = "npm";
    }
    static load(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield fs_1.default.promises.readFile(file, "utf8");
            return JSON.parse(content);
        });
    }
}
exports.PackageManager = PackageManager;
const installCmdTable = {
    npm: "i",
    pnpm: "add",
    yarn: "add",
    bun: "add",
};
const devOptionTable = {
    npm: "-D",
    pnpm: "-D",
    yarn: "-D",
    bun: "-d",
};
//# sourceMappingURL=PackageManager.js.map