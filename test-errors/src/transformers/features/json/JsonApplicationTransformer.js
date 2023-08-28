"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonApplicationTransformer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const JsonMetadataFactory_1 = require("../../../factories/JsonMetadataFactory");
const LiteralFactory_1 = require("../../../factories/LiteralFactory");
const MetadataCollection_1 = require("../../../factories/MetadataCollection");
const MetadataFactory_1 = require("../../../factories/MetadataFactory");
const JsonApplicationProgrammer_1 = require("../../../programmers/json/JsonApplicationProgrammer");
const TransformerError_1 = require("../../TransformerError");
var JsonApplicationTransformer;
(function (JsonApplicationTransformer) {
    JsonApplicationTransformer.transform = ({ checker }) => (expression) => {
        if (!expression.typeArguments?.length)
            throw new TransformerError_1.TransformerError({
                code: "typia.json.application",
                message: "no generic argument.",
            });
        //----
        // GET ARGUMENTS
        //----
        // VALIDATE TUPLE ARGUMENTS
        const top = expression.typeArguments[0];
        if (!typescript_1.default.isTupleTypeNode(top))
            return expression;
        else if (top.elements.some((child) => !typescript_1.default.isTypeNode(child)))
            return expression;
        // GET TYPES
        const types = top.elements.map((child) => checker.getTypeFromTypeNode(child));
        if (types.some((t) => t.isTypeParameter()))
            throw new TransformerError_1.TransformerError({
                code: "typia.json.application",
                message: "non-specified generic argument(s).",
            });
        // ADDITIONAL PARAMETERS
        const purpose = get_parameter(checker, "Purpose", expression.typeArguments[1], (str) => str === "swagger" || str === "ajv", () => "swagger");
        //----
        // GENERATORS
        //----
        // METADATA
        const collection = new MetadataCollection_1.MetadataCollection();
        const results = types.map((type) => MetadataFactory_1.MetadataFactory.analyze(checker)({
            escape: true,
            constant: true,
            absorb: false,
            validate: JsonMetadataFactory_1.JsonMetadataFactory.validate,
        })(collection)(type));
        // REPORT BUG IF REQUIRED
        const metadatas = [];
        const errors = [];
        for (const r of results) {
            if (r.success === false)
                errors.push(...r.errors);
            else
                metadatas.push(r.data);
        }
        if (errors.length)
            throw TransformerError_1.TransformerError.from("typia.json.application")(errors);
        // APPLICATION
        const app = JsonApplicationProgrammer_1.JsonApplicationProgrammer.write({
            purpose,
        })(metadatas);
        // RETURNS WITH LITERAL EXPRESSION
        return LiteralFactory_1.LiteralFactory.generate(app);
    };
    const get_parameter = (checker, name, node, predicator, defaulter) => {
        if (!node)
            return defaulter();
        // CHECK LITERAL TYPE
        const type = checker.getTypeFromTypeNode(node);
        if (!type.isLiteral())
            throw new TransformerError_1.TransformerError({
                code: "typia.json.application",
                message: `generic argument "${name}" must be constant.`,
            });
        // GET VALUE AND VALIDATE IT
        const value = type.value;
        if (typeof value !== "string" || predicator(value) === false)
            throw new TransformerError_1.TransformerError({
                code: "typia.json.application",
                message: `invalid value on generic argument "${name}".`,
            });
        return value;
    };
})(JsonApplicationTransformer || (exports.JsonApplicationTransformer = JsonApplicationTransformer = {}));
