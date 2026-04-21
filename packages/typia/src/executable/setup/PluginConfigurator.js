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
exports.PluginConfigurator = void 0;
const comment_json_1 = __importDefault(require("comment-json"));
const fs_1 = __importDefault(require("fs"));
var PluginConfigurator;
(function (PluginConfigurator) {
    const LEGACY_TRANSFORM = "typia/lib/transform";
    function configure(args) {
        return __awaiter(this, void 0, void 0, function* () {
            // GET COMPILER-OPTIONS
            const config = comment_json_1.default.parse(yield fs_1.default.promises.readFile(args.project, "utf8"));
            const compilerOptions = config.compilerOptions;
            if (compilerOptions === undefined)
                throw new ReferenceError(`${args.project} file does not have "compilerOptions" property.`);
            // PREPARE PLUGINS
            const plugins = (() => {
                const plugins = compilerOptions.plugins;
                if (plugins === undefined)
                    return (compilerOptions.plugins = []);
                else if (!Array.isArray(plugins))
                    throw new TypeError(`"plugins" property of ${args.project} must be array type.`);
                return plugins;
            })();
            const strict = compilerOptions.strict;
            const strictNullChecks = compilerOptions.strictNullChecks;
            const skipLibCheck = compilerOptions.skipLibCheck;
            const filtered = plugins.filter((p) => typeof p === "object" &&
                p !== null &&
                p.transform !== LEGACY_TRANSFORM);
            const changed = filtered.length !== plugins.length ||
                strictNullChecks === false ||
                (strict !== true && strictNullChecks !== true) ||
                skipLibCheck !== true;
            if (changed === false)
                return;
            // DO CONFIGURE
            compilerOptions.skipLibCheck = true;
            compilerOptions.strictNullChecks = true;
            if (strict === undefined && strictNullChecks === undefined)
                compilerOptions.strict = true;
            compilerOptions.plugins = filtered;
            yield fs_1.default.promises.writeFile(args.project, comment_json_1.default.stringify(config, null, 2));
        });
    }
    PluginConfigurator.configure = configure;
})(PluginConfigurator || (exports.PluginConfigurator = PluginConfigurator = {}));
//# sourceMappingURL=PluginConfigurator.js.map