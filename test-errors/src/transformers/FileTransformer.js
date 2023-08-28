"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTransformer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const NodeTransformer_1 = require("./NodeTransformer");
var FileTransformer;
(function (FileTransformer) {
    FileTransformer.transform = (project) => (context) => (file) => {
        if (file.isDeclarationFile)
            return file;
        return typescript_1.default.visitEachChild(file, (node) => iterate_node({ ...project, context })(context)(node), context);
    };
    const iterate_node = (project) => (context) => (node) => {
        const changed = try_transform_node(project)(node);
        return typescript_1.default.visitEachChild(changed ?? node, (child) => iterate_node(project)(context)(child), context);
    };
    const try_transform_node = (project) => (node) => {
        try {
            return NodeTransformer_1.NodeTransformer.transform(project)(node);
        }
        catch (exp) {
            // ONLY ACCEPT TRANSFORMER-ERROR
            if (!isTransformerError(exp))
                throw exp;
            // REPORT DIAGNOSTIC
            const diagnostic = typescript_1.default.createDiagnosticForNode(node, {
                key: exp.code,
                category: typescript_1.default.DiagnosticCategory.Error,
                message: exp.message,
                code: `(${exp.code})`,
            });
            project.extras.addDiagnostic(diagnostic);
            return null;
        }
    };
})(FileTransformer || (exports.FileTransformer = FileTransformer = {}));
const isTransformerError = (error) => typeof error === "object" &&
    error !== null &&
    error.constructor.name === "TransformerError" &&
    typeof error.code === "string" &&
    typeof error.message === "string";
