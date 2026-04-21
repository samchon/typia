"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTransformer = void 0;
const core_1 = require("@typia/core");
const utils_1 = require("@typia/utils");
const typescript_1 = __importDefault(require("typescript"));
const NodeTransformer_1 = require("./NodeTransformer");
/**
 * TypeScript source file transformer for typia.
 *
 * Entry point for typia's compile-time transformation. Traverses AST nodes,
 * transforms `typia.*` function calls into optimized runtime code, and injects
 * required imports. Skips declaration files.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var FileTransformer;
(function (FileTransformer) {
    FileTransformer.transform = (environments) => (transformer) => (file) => {
        if (file.isDeclarationFile)
            return file;
        const importer = new core_1.ImportProgrammer({
            internalPrefix: "typia_transform_",
            runtime: environments.options.runtime,
        });
        const context = Object.assign(Object.assign({}, environments), { transformer,
            importer });
        checkJsDocParsingMode.get(context, file);
        file = typescript_1.default.visitEachChild(file, (node) => iterate_node({
            context,
            node,
        }), transformer);
        const index = find_import_injection_index(file);
        return typescript_1.default.factory.updateSourceFile(file, [
            ...file.statements.slice(0, index),
            ...importer.toStatements(),
            ...file.statements.slice(index),
        ], false, file.referencedFiles, file.typeReferenceDirectives, file.hasNoDefaultLib, file.libReferenceDirectives);
    };
    const iterate_node = (props) => {
        var _a;
        return typescript_1.default.visitEachChild((_a = try_transform_node(props)) !== null && _a !== void 0 ? _a : props.node, (node) => iterate_node({
            context: props.context,
            node,
        }), props.context.transformer);
    };
    const try_transform_node = (props) => {
        try {
            return NodeTransformer_1.NodeTransformer.transform(props);
        }
        catch (exp) {
            // ONLY ACCEPT TRANSFORMER-ERROR
            if (!isTransformerError(exp))
                throw exp;
            // REPORT DIAGNOSTIC
            const diagnostic = typescript_1.default.createDiagnosticForNode(props.node, {
                key: exp.code,
                category: typescript_1.default.DiagnosticCategory.Error,
                message: exp.message,
                code: `(${exp.code})`,
            });
            props.context.extras.addDiagnostic(diagnostic);
            return null;
        }
    };
    const find_import_injection_index = (file) => {
        let i = 0;
        for (; i < file.statements.length; ++i) {
            const stmt = file.statements[i];
            if (typescript_1.default.isExpressionStatement(stmt) &&
                typescript_1.default.isStringLiteralLike(stmt.expression) &&
                stmt.expression.text.startsWith("use "))
                continue;
            break;
        }
        return i;
    };
})(FileTransformer || (exports.FileTransformer = FileTransformer = {}));
const isTransformerError = (error) => typeof error === "object" &&
    error !== null &&
    error.constructor.name === "TransformerError" &&
    typeof error.code === "string" &&
    typeof error.message === "string";
const checkJsDocParsingMode = new utils_1.Singleton((context, file) => {
    if (typeof file.jsDocParsingMode === "number" &&
        file.jsDocParsingMode !== 0) {
        context.extras.addDiagnostic(typescript_1.default.createDiagnosticForNode(file, {
            code: `(typia setup)`,
            key: "jsDocParsingMode",
            category: typescript_1.default.DiagnosticCategory.Warning,
            message: [
                `Run "npx typia setup" or "npx typia patch" command again.`,
                ``,
                `Since TypeScript v5.3 update, "tsc" no more parses JSDoc comments. Therefore, "typia" also cannot utilize those JSDoc comments too, and it damages on some features of "typia" like "comment tags" or "JSON schema" generator.`,
                ``,
                `To solve this problem, run "npx typia setup" or "npx typia patch" command to hack the TypeScript compiler to revive the JSDoc parsing feature.`,
                ``,
                `  - reference: https://github.com/microsoft/TypeScript/pull/55739`,
            ].join("\n"),
        }));
    }
});
//# sourceMappingURL=FileTransformer.js.map