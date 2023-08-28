"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_tuple = void 0;
const Metadata_1 = require("../../schemas/metadata/Metadata");
const application_schema_1 = require("./application_schema");
/**
 * @internal
 */
const application_tuple = (options) => (components) => (tuple) => (attribute) => {
    const schema = {
        type: "array",
        items: tuple.type.elements.map((meta, i) => (0, application_schema_1.application_schema)(options)(false)(components)(meta.rest ?? meta)({
            ...attribute,
            "x-typia-rest": i === tuple.type.elements.length - 1 &&
                meta.rest !== null,
            "x-typia-required": meta.required,
            "x-typia-optional": meta.optional,
        })),
        ...attribute,
        minItems: !!tuple.type.elements.at(-1)?.rest
            ? tuple.type.elements.length - 1
            : tuple.type.elements.filter((x) => !x.optional).length,
        maxItems: !!tuple.type.elements.at(-1)?.rest
            ? undefined
            : tuple.type.elements.length,
    };
    if (options.purpose === "ajv")
        if (tuple.type.elements.length === 0)
            return schema;
        else if (!tuple.type.elements.at(-1)?.rest)
            return schema;
    const wrapper = {
        ...schema,
        items: (0, application_schema_1.application_schema)(options)(false)(components)(tuple.type.elements.reduce((x, y) => Metadata_1.Metadata.merge(x.rest ?? x, y.rest ?? y), Metadata_1.Metadata.initialize()))(tuple.type.recursive ? {} : attribute),
        "x-typia-tuple": schema,
        minItems: schema.minItems,
        maxItems: schema.maxItems,
    };
    return wrapper;
};
exports.application_tuple = application_tuple;
