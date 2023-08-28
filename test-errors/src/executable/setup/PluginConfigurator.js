"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginConfigurator = void 0;
const comment_json_1 = __importDefault(require("comment-json"));
const fs_1 = __importDefault(require("fs"));
var PluginConfigurator;
(function (PluginConfigurator) {
    async function configure(args) {
        // GET COMPILER-OPTIONS
        const config = comment_json_1.default.parse(await fs_1.default.promises.readFile(args.project, "utf8"));
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
        const oldbie = plugins.find((p) => typeof p === "object" &&
            p !== null &&
            p.transform === "typia/lib/transform");
        if (strictNullChecks !== false &&
            (strict === true || strictNullChecks === true) &&
            oldbie !== undefined)
            return;
        // DO CONFIGURE
        compilerOptions.strictNullChecks = true;
        if (strict === undefined && strictNullChecks === undefined)
            compilerOptions.strict = true;
        if (oldbie === undefined)
            plugins.push(comment_json_1.default.parse(`
                        {
                            "transform": "typia/lib/transform"
                        }`));
        await fs_1.default.promises.writeFile(args.project, comment_json_1.default.stringify(config, null, 2));
    }
    PluginConfigurator.configure = configure;
})(PluginConfigurator || (exports.PluginConfigurator = PluginConfigurator = {}));
