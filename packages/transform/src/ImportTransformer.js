"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportTransformer = void 0;
const path_1 = __importDefault(require("path"));
const typescript_1 = __importDefault(require("typescript"));
/**
 * Transforms import paths for typia build output.
 *
 * Rewrites relative import paths when building typia packages. Also removes
 * unused typia imports that only contained transformable function calls (since
 * those are replaced at compile time).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var ImportTransformer;
(function (ImportTransformer) {
    ImportTransformer.transform = (props) => (context) => (file) => transform_file({
        top: props.from,
        to: props.to,
        context,
        file,
    });
    const transform_file = (props) => {
        if (props.file.isDeclarationFile)
            return props.file;
        const from = get_directory_path(path_1.default.resolve(props.file.getSourceFile().fileName));
        const to = from.replace(props.top, props.to);
        // First pass: transform relative imports
        let transformedFile = typescript_1.default.visitEachChild(props.file, (node) => transform_node({
            top: props.top,
            from,
            to,
            node,
        }), props.context);
        // Second pass: remove unused typia imports
        transformedFile = removeUnusedTypiaImports(transformedFile);
        return transformedFile;
    };
    const transform_node = (props) => {
        if (!typescript_1.default.isImportDeclaration(props.node) ||
            !typescript_1.default.isStringLiteral(props.node.moduleSpecifier))
            return props.node;
        const text = props.node.moduleSpecifier.text;
        if (text[0] !== ".")
            return props.node;
        const location = path_1.default.resolve(props.from, text);
        if (location.indexOf(props.top) === 0)
            return props.node;
        const replaced = (() => {
            const simple = path_1.default
                .relative(props.to, location)
                .split(path_1.default.sep)
                .join("/");
            return simple[0] === "." ? simple : `./${simple}`;
        })();
        return typescript_1.default.factory.createImportDeclaration(undefined, props.node.importClause, typescript_1.default.factory.createStringLiteral(replaced), props.node.assertClause);
    };
})(ImportTransformer || (exports.ImportTransformer = ImportTransformer = {}));
const get_directory_path = (file) => {
    const split = path_1.default.resolve(file).split(path_1.default.sep);
    split.pop();
    return path_1.default.resolve(split.join(path_1.default.sep));
};
/** Remove unused typia imports that are only used in transformable calls */
const removeUnusedTypiaImports = (file) => {
    const imports = new Map();
    for (const stmt of file.statements) {
        if (typescript_1.default.isImportDeclaration(stmt) === false ||
            typescript_1.default.isStringLiteral(stmt.moduleSpecifier) === false ||
            stmt.moduleSpecifier.text !== "typia" ||
            stmt.importClause === undefined)
            continue;
        // Track default import (import typia from 'typia')
        if (stmt.importClause.name)
            imports.set(stmt.importClause.name.text, {
                declaration: stmt,
                default: true,
            });
        // Track named imports (import { tags } from 'typia') - keep these
        if (stmt.importClause.namedBindings &&
            typescript_1.default.isNamedImports(stmt.importClause.namedBindings))
            for (const element of stmt.importClause.namedBindings.elements)
                imports.set(element.name.text, {
                    declaration: stmt,
                    default: false,
                });
    }
    if (imports.size === 0)
        return file; // No typia imports to check
    // Find usage of typia identifiers that are NOT transformable calls
    const nonTransformableUsage = new Set();
    const checkUsage = (node) => {
        if (typescript_1.default.isIdentifier(node) && imports.has(node.text)) {
            const identifier = node.text;
            // Check if this identifier is being used as part of a property access
            if (node.parent &&
                typescript_1.default.isPropertyAccessExpression(node.parent) &&
                node.parent.expression === node) {
                // This is typia.something - check if it's a transformable call pattern
                if (!isLikelyTransformableCall(node.parent))
                    nonTransformableUsage.add(identifier);
            }
            else
                // Direct usage of the typia identifier (not as property access)
                // This is definitely non-transformable usage
                nonTransformableUsage.add(identifier);
        }
        typescript_1.default.forEachChild(node, checkUsage);
    };
    // Check all statements except import declarations
    for (const stmt of file.statements)
        if (!typescript_1.default.isImportDeclaration(stmt) ||
            !typescript_1.default.isStringLiteral(stmt.moduleSpecifier) ||
            stmt.moduleSpecifier.text !== "typia")
            checkUsage(stmt);
    // Update import statements
    const newStatements = file.statements
        .map((stmt) => {
        if (typescript_1.default.isImportDeclaration(stmt) &&
            typescript_1.default.isStringLiteral(stmt.moduleSpecifier) &&
            stmt.moduleSpecifier.text === "typia" &&
            stmt.importClause) {
            const newImportClause = filterTypiaImportClause(stmt.importClause, nonTransformableUsage);
            if (newImportClause)
                return typescript_1.default.factory.createImportDeclaration(stmt.modifiers, newImportClause, stmt.moduleSpecifier, stmt.attributes);
            return null; // Skip adding the import if all imports are unused
        }
        return stmt;
    })
        .filter((stmt) => stmt !== null);
    return typescript_1.default.factory.updateSourceFile(file, newStatements, file.isDeclarationFile, file.referencedFiles, file.typeReferenceDirectives, file.hasNoDefaultLib, file.libReferenceDirectives);
};
/**
 * Check if a property access expression looks like a transformable typia call
 * This uses heuristics to detect patterns like typia.xxx(),
 * typia.namespace.xxx()
 */
const isLikelyTransformableCall = (node) => {
    // Check if this is eventually part of a call expression
    let current = node;
    // Walk up the chain to find if this leads to a call expression
    // Handle patterns like: typia.xxx(), typia.namespace.xxx()
    while (typescript_1.default.isPropertyAccessExpression(current)) {
        current = current.parent;
    }
    // If the final result is a call expression, this is likely transformable
    if (typescript_1.default.isCallExpression(current) &&
        (current.expression === node ||
            (typescript_1.default.isPropertyAccessExpression(current.expression) &&
                isTypiaPropertyChain(current.expression)))) {
        return true;
    }
    return false;
};
/** Check if a property access expression is part of a typia.xxx.yyy chain */
const isTypiaPropertyChain = (node) => {
    let current = node;
    while (typescript_1.default.isPropertyAccessExpression(current)) {
        current = current.expression;
    }
    return typescript_1.default.isIdentifier(current) && current.text === "typia";
};
/** Filter import clause to remove unused default imports */
const filterTypiaImportClause = (importClause, usedImports) => {
    const hasDefaultImport = importClause.name && usedImports.has(importClause.name.text);
    const namedBindings = importClause.namedBindings; // Always keep named bindings like { tags }
    // Return undefined if no imports are used
    if (!hasDefaultImport && !namedBindings) {
        return undefined;
    }
    return typescript_1.default.factory.createImportClause(importClause.isTypeOnly, hasDefaultImport ? importClause.name : undefined, namedBindings);
};
//# sourceMappingURL=ImportTransformer.js.map