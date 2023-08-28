"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_alias = void 0;
const CommentFactory_1 = require("../../factories/CommentFactory");
const JSON_SCHEMA_PREFIX_1 = require("./JSON_SCHEMA_PREFIX");
const application_object_1 = require("./application_object");
const application_schema_1 = require("./application_schema");
const application_alias = (options) => (blockNever) => (components) => (alias) => (nullable) => {
    if (alias.value.size() === 1 && alias.value.objects.length === 1)
        return (0, application_object_1.application_object)(options)(components)(alias.value.objects[0])(nullable);
    const key = options.purpose === "ajv"
        ? alias.name
        : `${alias.name}${nullable ? ".Nullable" : ""}`;
    const $id = `${JSON_SCHEMA_PREFIX_1.JSON_COMPONENTS_PREFIX}/schemas/${key}`;
    // TEMPORARY ASSIGNMENT
    if (components.schemas?.[key] === undefined) {
        components.schemas ??= {};
        components.schemas[key] = {
            $id: key,
        };
        // GENERATE SCHEM
        const schema = (0, application_schema_1.application_schema)(options)(blockNever)(components)(alias.value)({
            deprecated: alias.jsDocTags.some((tag) => tag.name === "deprecated") ||
                undefined,
            title: (() => {
                const info = alias.jsDocTags.find((tag) => tag.name === "title");
                return info?.text?.length
                    ? CommentFactory_1.CommentFactory.merge(info.text)
                    : undefined;
            })(),
            description: alias.description ?? undefined,
            "x-typia-jsDocTags": alias.jsDocTags.length
                ? alias.jsDocTags
                : undefined,
        });
        components.schemas ??= {};
        components.schemas[key] = {
            $id: options.purpose === "ajv" ? $id : undefined,
            $recursiveAnchor: (options.purpose === "ajv" && alias.recursive) || undefined,
            ...schema,
        };
    }
    return { $ref: $id };
};
exports.application_alias = application_alias;
