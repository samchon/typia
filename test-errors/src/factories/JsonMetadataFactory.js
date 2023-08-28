"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonMetadataFactory = void 0;
const TransformerError_1 = require("../transformers/TransformerError");
const MetadataCollection_1 = require("./MetadataCollection");
const MetadataFactory_1 = require("./MetadataFactory");
var JsonMetadataFactory;
(function (JsonMetadataFactory) {
    JsonMetadataFactory.analyze = (method) => (checker) => (type) => {
        const collection = new MetadataCollection_1.MetadataCollection();
        const result = MetadataFactory_1.MetadataFactory.analyze(checker)({
            escape: true,
            constant: true,
            absorb: true,
            validate: JsonMetadataFactory.validate,
        })(collection)(type);
        if (result.success === false)
            throw TransformerError_1.TransformerError.from(method)(result.errors);
        return [collection, result.data];
    };
    JsonMetadataFactory.validate = (meta) => {
        const output = [];
        if (meta.atomics.some((a) => a.type === "bigint") ||
            meta.constants.some((c) => c.type === "bigint"))
            output.push("JSON does not support bigint type.");
        if (meta.tuples.some((t) => t.type.elements.some((e) => e.isRequired() === false)) ||
            meta.arrays.some((a) => a.type.value.isRequired() === false))
            output.push("JSON does not support undefined type in array.");
        return output;
    };
})(JsonMetadataFactory || (exports.JsonMetadataFactory = JsonMetadataFactory = {}));
