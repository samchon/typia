"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataTransformer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const LiteralFactory_1 = require("../../../factories/LiteralFactory");
const MetadataCollection_1 = require("../../../factories/MetadataCollection");
const MetadataFactory_1 = require("../../../factories/MetadataFactory");
const TransformerError_1 = require("../../TransformerError");
var MetadataTransformer;
(function (MetadataTransformer) {
    MetadataTransformer.transform = ({ checker }) => (expression) => {
        if (!expression.typeArguments?.length)
            throw new TransformerError_1.TransformerError({
                code: "typia.metadata",
                message: "no generic argument.",
            });
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
                code: "typia.metadata",
                message: "non-specified generic argument(s).",
            });
        // METADATA
        const collection = new MetadataCollection_1.MetadataCollection();
        const metadatas = types.map((type) => {
            const result = MetadataFactory_1.MetadataFactory.analyze(checker)({
                escape: true,
                constant: true,
                absorb: true,
            })(collection)(type);
            if (result.success === false)
                throw TransformerError_1.TransformerError.from("typia.metadata")(result.errors);
            return result.data;
        });
        // CONVERT TO PRIMITIVE TYPE
        const app = {
            metadatas: metadatas.map((metadata) => metadata.toJSON()),
            collection: collection.toJSON(),
        };
        return LiteralFactory_1.LiteralFactory.generate(app);
    };
})(MetadataTransformer || (exports.MetadataTransformer = MetadataTransformer = {}));
