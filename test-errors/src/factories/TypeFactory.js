"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeFactory = void 0;
const typescript_1 = __importDefault(require("typescript"));
var TypeFactory;
(function (TypeFactory) {
    TypeFactory.isFunction = (type) => getFunction(type) !== null;
    const getFunction = (type) => {
        const node = type.symbol?.declarations?.[0];
        if (node === undefined)
            return null;
        return typescript_1.default.isFunctionLike(node)
            ? node
            : typescript_1.default.isPropertyAssignment(node) || typescript_1.default.isPropertyDeclaration(node)
                ? typescript_1.default.isFunctionLike(node.initializer)
                    ? node.initializer
                    : null
                : null;
    };
    TypeFactory.getReturnType = (checker) => (type) => (name) => {
        // FIND TO-JSON METHOD
        const symbol = type.getProperty(name);
        if (!symbol)
            return null;
        else if (!symbol.valueDeclaration)
            return null;
        // GET FUNCTION DECLARATION
        const functor = checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
        // RETURNS THE RETURN-TYPE
        const signature = checker.getSignaturesOfType(functor, typescript_1.default.SignatureKind.Call)[0];
        return signature ? signature.getReturnType() : null;
    };
    TypeFactory.getFullName = (checker) => (type, symbol) => {
        // PRIMITIVE
        symbol ??= type.aliasSymbol ?? type.getSymbol();
        if (symbol === undefined)
            return checker.typeToString(type);
        // UNION OR INTERSECT
        if (type.aliasSymbol === undefined &&
            type.isUnionOrIntersection()) {
            const joiner = type.isIntersection() ? " & " : " | ";
            return type.types
                .map((child) => TypeFactory.getFullName(checker)(child))
                .join(joiner);
        }
        //----
        // SPECIALIZATION
        //----
        const name = get_name(symbol);
        // CHECK GENERIC
        const generic = type.aliasSymbol
            ? type.aliasTypeArguments || []
            : checker.getTypeArguments(type);
        return generic.length
            ? name === "Promise"
                ? TypeFactory.getFullName(checker)(generic[0])
                : `${name}<${generic
                    .map((child) => TypeFactory.getFullName(checker)(child))
                    .join(", ")}>`
            : name;
    };
    const explore_name = (decl) => (name) => typescript_1.default.isModuleBlock(decl)
        ? explore_name(decl.parent.parent)(`${decl.parent.name.getFullText().trim()}.${name}`)
        : name;
    const get_name = (symbol) => {
        const parent = symbol.getDeclarations()?.[0]?.parent;
        return parent
            ? explore_name(parent)(symbol.escapedName.toString())
            : "__type";
    };
    TypeFactory.keyword = (type) => {
        return typescript_1.default.factory.createKeywordTypeNode(type === "void"
            ? typescript_1.default.SyntaxKind.VoidKeyword
            : type === "any"
                ? typescript_1.default.SyntaxKind.AnyKeyword
                : type === "unknown"
                    ? typescript_1.default.SyntaxKind.UnknownKeyword
                    : type === "boolean"
                        ? typescript_1.default.SyntaxKind.BooleanKeyword
                        : type === "number"
                            ? typescript_1.default.SyntaxKind.NumberKeyword
                            : type === "bigint"
                                ? typescript_1.default.SyntaxKind.BigIntKeyword
                                : typescript_1.default.SyntaxKind.StringKeyword);
    };
})(TypeFactory || (exports.TypeFactory = TypeFactory = {}));
