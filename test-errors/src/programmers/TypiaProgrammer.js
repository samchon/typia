"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypiaProgrammer = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const typescript_1 = __importDefault(require("typescript"));
const ImportTransformer_1 = require("../transformers/ImportTransformer");
const transform_1 = __importDefault(require("../transform"));
var TypiaProgrammer;
(function (TypiaProgrammer) {
    TypiaProgrammer.build = async (props) => {
        props.input = path_1.default.resolve(props.input);
        props.output = path_1.default.resolve(props.output);
        if ((await is_directory(props.input)) === false)
            throw new URIError("Error on TypiaGenerator.generate(): input path is not a directory.");
        else if (fs_1.default.existsSync(props.output) === false)
            await fs_1.default.promises.mkdir(props.output, { recursive: true });
        else if ((await is_directory(props.output)) === false) {
            const parent = path_1.default.join(props.output, "..");
            if ((await is_directory(parent)) === false)
                throw new URIError("Error on TypiaGenerator.generate(): output path is not a directory.");
            await fs_1.default.promises.mkdir(props.output);
        }
        // CREATE PROGRAM
        const { options: compilerOptions } = typescript_1.default.parseJsonConfigFileContent(typescript_1.default.readConfigFile(props.project, typescript_1.default.sys.readFile).config, {
            fileExists: typescript_1.default.sys.fileExists,
            readFile: typescript_1.default.sys.readFile,
            readDirectory: typescript_1.default.sys.readDirectory,
            useCaseSensitiveFileNames: typescript_1.default.sys.useCaseSensitiveFileNames,
        }, path_1.default.dirname(props.project));
        const program = typescript_1.default.createProgram(await (async () => {
            const container = [];
            await gather(props)(container)(props.input)(props.output);
            return container;
        })(), compilerOptions);
        // DO TRANSFORM
        const diagnostics = [];
        const result = typescript_1.default.transform(program
            .getSourceFiles()
            .filter((file) => !file.isDeclarationFile &&
            path_1.default.resolve(file.fileName).indexOf(props.input) !== -1), [
            ImportTransformer_1.ImportTransformer.transform(props.input)(props.output),
            (0, transform_1.default)(program, (compilerOptions.plugins ?? []).find((p) => p.transform === "typia/lib/transform" ||
                p.transform === "../src/transform.ts") ?? {}, {
                // @todo
                addDiagnostic: (diag) => diagnostics.push(diag),
            }),
        ], program.getCompilerOptions());
        // TRACE ERRORS
        for (const diag of diagnostics) {
            diag;
        }
        if (diagnostics.length)
            process.exit(-1);
        // ARCHIVE TRANSFORMED FILES
        const printer = typescript_1.default.createPrinter({
            newLine: typescript_1.default.NewLineKind.LineFeed,
        });
        for (const file of result.transformed) {
            const to = path_1.default
                .resolve(file.fileName)
                .replace(props.input, props.output);
            const content = printer.printFile(file);
            await fs_1.default.promises.writeFile(to, emend(content), "utf8");
        }
    };
    const emend = (content) => {
        if (content.indexOf("typia.") === -1 ||
            content.indexOf("import typia") !== -1 ||
            content.indexOf("import * as typia") !== -1)
            return content;
        return `import typia from "typia";\n\n${content}`;
    };
    const is_directory = async (current) => {
        const stat = await fs_1.default.promises.stat(current);
        return stat.isDirectory();
    };
    const gather = (props) => (container) => (from) => async (to) => {
        if (from === props.output)
            return;
        else if (fs_1.default.existsSync(to) === false)
            await fs_1.default.promises.mkdir(to);
        for (const file of await fs_1.default.promises.readdir(from)) {
            const next = path_1.default.join(from, file);
            const stat = await fs_1.default.promises.stat(next);
            if (stat.isDirectory()) {
                await gather(props)(container)(next)(path_1.default.join(to, file));
                continue;
            }
            else if (file.substring(file.length - 3) === ".ts")
                container.push(next);
        }
    };
})(TypiaProgrammer || (exports.TypiaProgrammer = TypiaProgrammer = {}));
