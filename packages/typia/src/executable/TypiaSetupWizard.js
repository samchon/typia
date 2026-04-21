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
exports.TypiaSetupWizard = void 0;
const fs_1 = __importDefault(require("fs"));
const package_manager_detector_1 = require("package-manager-detector");
const ArgumentParser_1 = require("./setup/ArgumentParser");
const PackageManager_1 = require("./setup/PackageManager");
const PluginConfigurator_1 = require("./setup/PluginConfigurator");
var TypiaSetupWizard;
(function (TypiaSetupWizard) {
    const TTSC_PACKAGE = "@typia/ttsc";
    const TSGO_COMPILER_PACKAGE = "@typescript/native-preview";
    TypiaSetupWizard.setup = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        console.log("----------------------------------------");
        console.log(" Typia Setup Wizard");
        console.log("----------------------------------------");
        // PREPARE ASSETS
        const pack = yield PackageManager_1.PackageManager.mount();
        const args = yield ArgumentParser_1.ArgumentParser.parse(pack, inquiry);
        // INSTALL TSGO TOOLCHAIN
        pack.install({
            dev: true,
            modulo: TSGO_COMPILER_PACKAGE,
            version: "latest",
        });
        pack.install({ dev: true, modulo: TTSC_PACKAGE, version: "latest" });
        (_a = args.project) !== null && _a !== void 0 ? _a : (args.project = (() => {
            fs_1.default.writeFileSync("tsconfig.json", `${JSON.stringify({ compilerOptions: {} }, null, 2)}\n`, "utf8");
            return (args.project = "tsconfig.json");
        })());
        // NORMALIZE PROJECT SETTINGS
        yield pack.save((data) => {
            var _a;
            (_a = data.scripts) !== null && _a !== void 0 ? _a : (data.scripts = {});
            if (typeof data.scripts.prepare === "string") {
                const prepare = data.scripts.prepare
                    .split("&&")
                    .map((str) => str.trim())
                    .filter((str) => str.length !== 0 && isLegacyCompilerPatchStep(str) === false)
                    .join(" && ");
                if (prepare.length !== 0)
                    data.scripts.prepare = prepare;
                else
                    delete data.scripts.prepare;
            }
            if (typeof data.scripts.postinstall === "string") {
                data.scripts.postinstall = data.scripts.postinstall
                    .split("&&")
                    .map((str) => str.trim())
                    .filter((str) => isLegacyCompilerPatchStep(str) === false)
                    .join(" && ");
                if (data.scripts.postinstall.length === 0)
                    delete data.scripts.postinstall;
            }
        });
        // CONFIGURE TYPIA
        yield PluginConfigurator_1.PluginConfigurator.configure(args);
    });
    const inquiry = (pack, command, prompt, action) => __awaiter(this, void 0, void 0, function* () {
        // PREPARE ASSETS
        command.option("--manager [manager", "package manager");
        command.option("--project [project]", "tsconfig.json file location");
        // INTERNAL PROCEDURES
        const questioned = { value: false };
        const select = (name) => (message) => (choices, filter) => __awaiter(this, void 0, void 0, function* () {
            questioned.value = true;
            return (yield prompt()(Object.assign({ type: "list", name: name, message: message, choices: choices }, (filter ? { filter } : {}))))[name];
        });
        const configure = () => __awaiter(this, void 0, void 0, function* () {
            const fileList = yield (yield fs_1.default.promises.readdir(process.cwd()))
                .filter((str) => str.substring(0, 8) === "tsconfig" &&
                str.substring(str.length - 5) === ".json")
                .sort((x, y) => x === "tsconfig.json"
                ? -1
                : y === "tsconfig.json"
                    ? 1
                    : x < y
                        ? -1
                        : 1);
            if (fileList.length === 0) {
                if (process.cwd() !== pack.directory)
                    throw new URIError(`Unable to find "tsconfig.json" file.`);
                return null;
            }
            else if (fileList.length === 1)
                return fileList[0];
            return select("tsconfig")("TS Config File")(fileList);
        });
        // DO CONSTRUCT
        return action((options) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            pack.manager = (_a = options.manager) !== null && _a !== void 0 ? _a : (options.manager = (_b = (yield detectManager())) !== null && _b !== void 0 ? _b : (yield select("manager")("Package Manager")([
                "npm",
                "pnpm",
                "bun",
                "yarn (berry is not supported)",
            ], (value) => value.split(" ")[0])));
            (_c = options.project) !== null && _c !== void 0 ? _c : (options.project = yield configure());
            if (questioned.value)
                console.log("");
            return options;
        }));
    });
    const detectManager = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const result = yield (0, package_manager_detector_1.detect)({ cwd: process.cwd() });
        switch (result === null || result === void 0 ? void 0 : result.name) {
            case "npm":
            case "deno":
                return null; // NPM case is still selectable & Deno is not supported
            default:
                return (_a = result === null || result === void 0 ? void 0 : result.name) !== null && _a !== void 0 ? _a : null;
        }
    });
    const isLegacyCompilerPatchStep = (str) => str === "typia patch" || /\b[a-z-]+-patch install\b/.test(str);
})(TypiaSetupWizard || (exports.TypiaSetupWizard = TypiaSetupWizard = {}));
//# sourceMappingURL=TypiaSetupWizard.js.map