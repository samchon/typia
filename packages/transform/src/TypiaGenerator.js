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
exports.TypiaGenerator = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const typescript_1 = __importDefault(require("typescript"));
const ImportTransformer_1 = require("./ImportTransformer");
const transform_1 = require("./transform");
var TypiaGenerator;
(function (TypiaGenerator) {
    TypiaGenerator.build = (location) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        location.input = path_1.default.resolve(location.input);
        location.output = path_1.default.resolve(location.output);
        if ((yield is_directory(location.input)) === false)
            throw new URIError("Error on TypiaGenerator.generate(): input path is not a directory.");
        else if (fs_1.default.existsSync(location.output) === false)
            yield fs_1.default.promises.mkdir(location.output, { recursive: true });
        else if ((yield is_directory(location.output)) === false) {
            const parent = path_1.default.join(location.output, "..");
            if ((yield is_directory(parent)) === false)
                throw new URIError("Error on TypiaGenerator.generate(): output path is not a directory.");
            yield fs_1.default.promises.mkdir(location.output);
        }
        // CREATE PROGRAM
        const { options: compilerOptions } = typescript_1.default.parseJsonConfigFileContent(typescript_1.default.readConfigFile(location.project, typescript_1.default.sys.readFile).config, {
            fileExists: typescript_1.default.sys.fileExists,
            readFile: typescript_1.default.sys.readFile,
            readDirectory: typescript_1.default.sys.readDirectory,
            useCaseSensitiveFileNames: typescript_1.default.sys.useCaseSensitiveFileNames,
        }, path_1.default.dirname(location.project));
        const program = typescript_1.default.createProgram(yield (() => __awaiter(this, void 0, void 0, function* () {
            const container = [];
            yield gather({
                location,
                container,
                from: location.input,
                to: location.output,
            });
            return container;
        }))(), compilerOptions);
        // DO TRANSFORM
        const diagnostics = [];
        const result = typescript_1.default.transform(program
            .getSourceFiles()
            .filter((file) => !file.isDeclarationFile &&
            path_1.default.resolve(file.fileName).indexOf(location.input) !== -1), [
            ImportTransformer_1.ImportTransformer.transform({
                from: location.input,
                to: location.output,
            }),
            (0, transform_1.transform)(program, (_b = ((_a = compilerOptions.plugins) !== null && _a !== void 0 ? _a : []).find((p) => p.transform === "typia/lib/transform")) !== null && _b !== void 0 ? _b : {}, {
                addDiagnostic: (diag) => diagnostics.push(diag),
            }),
        ], program.getCompilerOptions());
        // TRACE ERRORS
        for (const diag of diagnostics) {
            const file = diag.file
                ? path_1.default.relative(diag.file.fileName, process.cwd())
                : "(unknown file)";
            const category = diag.category === typescript_1.default.DiagnosticCategory.Warning
                ? "warning"
                : diag.category === typescript_1.default.DiagnosticCategory.Error
                    ? "error"
                    : diag.category === typescript_1.default.DiagnosticCategory.Suggestion
                        ? "suggestion"
                        : diag.category === typescript_1.default.DiagnosticCategory.Message
                            ? "message"
                            : "unknown";
            const [line, pos] = diag.file
                ? (() => {
                    const lines = diag
                        .file.text.substring(0, diag.start)
                        .split("\n");
                    if (lines.length === 0)
                        return [0, 0];
                    return [lines.length, lines.at(-1).length + 1];
                })()
                : [0, 0];
            console.error(`${file}:${line}:${pos} - ${category} TS${diag.code}: ${diag.messageText}`);
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
                .replace(location.input, location.output);
            const content = printer.printFile(file);
            yield fs_1.default.promises.writeFile(to, content, "utf8");
        }
    });
    const is_directory = (current) => __awaiter(this, void 0, void 0, function* () {
        const stat = yield fs_1.default.promises.stat(current);
        return stat.isDirectory();
    });
    const gather = (props) => __awaiter(this, void 0, void 0, function* () {
        if (props.from === props.location.output)
            return;
        else if (fs_1.default.existsSync(props.to) === false)
            yield fs_1.default.promises.mkdir(props.to);
        for (const file of yield fs_1.default.promises.readdir(props.from)) {
            const next = path_1.default.join(props.from, file);
            const stat = yield fs_1.default.promises.stat(next);
            if (stat.isDirectory()) {
                yield gather({
                    location: props.location,
                    container: props.container,
                    from: next,
                    to: path_1.default.join(props.to, file),
                });
                continue;
            }
            else if (is_supported_extension(file))
                props.container.push(next);
        }
    });
    const is_supported_extension = (filename) => {
        // avoid using look-behind assertion as it is not marked as Baseline Widely Available
        return TS_PATTERN.test(filename) && !DTS_PATTERN.test(filename);
    };
})(TypiaGenerator || (exports.TypiaGenerator = TypiaGenerator = {}));
const TS_PATTERN = /\.[cm]?tsx?$/;
const DTS_PATTERN = /\.d\.[cm]?tsx?$/;
//# sourceMappingURL=TypiaGenerator.js.map