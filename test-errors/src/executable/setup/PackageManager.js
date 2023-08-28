"use strict";
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
    directory;
    data;
    manager = "npm";
    get file() {
        return path_1.default.join(this.directory, "package.json");
    }
    static async mount() {
        const location = await FileRetriever_1.FileRetriever.directory("package.json")(process.cwd());
        if (location === null)
            throw new URIError(`Unable to find "package.json" file`);
        return new PackageManager(location, await this.load(path_1.default.join(location, "package.json")));
    }
    async save(modifier) {
        const content = await fs_1.default.promises.readFile(this.file, "utf8");
        this.data = JSON.parse(content);
        modifier(this.data);
        return fs_1.default.promises.writeFile(this.file, JSON.stringify(this.data, null, 2), "utf8");
    }
    install(props) {
        const middle = this.manager === "yarn"
            ? `add${props.dev ? " -D" : ""}`
            : `install ${props.dev ? "--save-dev" : "--save"}`;
        CommandExecutor_1.CommandExecutor.run(`${this.manager} ${middle} ${props.modulo}${props.version ? `@${props.version}` : ""}`);
        return true;
    }
    constructor(directory, data) {
        this.directory = directory;
        this.data = data;
    }
    static async load(file) {
        const content = await fs_1.default.promises.readFile(file, "utf8");
        return JSON.parse(content);
    }
}
exports.PackageManager = PackageManager;
