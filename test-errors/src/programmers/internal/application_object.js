"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_object = void 0;
const CommentFactory_1 = require("../../factories/CommentFactory");
const Metadata_1 = require("../../schemas/metadata/Metadata");
const PatternUtil_1 = require("../../utils/PatternUtil");
const JSON_SCHEMA_PREFIX_1 = require("./JSON_SCHEMA_PREFIX");
const application_schema_1 = require("./application_schema");
const metadata_to_pattern_1 = require("./metadata_to_pattern");
/**
 * @internal
 */
const application_object = (options) => (components) => (obj) => (nullable) => {
    const key = options.purpose === "ajv"
        ? obj.name
        : `${obj.name}${nullable ? ".Nullable" : ""}`;
    const $id = `${JSON_SCHEMA_PREFIX_1.JSON_COMPONENTS_PREFIX}/schemas/${key}`;
    const output = { $ref: $id };
    // TEMPORARY ASSIGNMENT
    if (components.schemas?.[key] !== undefined)
        return output;
    components.schemas ??= {};
    components.schemas[key] = {};
    // ITERATE PROPERTIES
    const properties = {};
    const extraMeta = {
        patternProperties: {},
        additionalProperties: undefined,
    };
    const required = [];
    for (const property of obj.properties) {
        if (
        // FUNCTIONAL TYPE
        property.value.functional === true &&
            property.value.nullable === false &&
            property.value.isRequired() === true &&
            property.value.size() === 0)
            continue;
        else if (property.jsDocTags.find((tag) => tag.name === "hidden"))
            continue; // THE HIDDEN TAG
        const key = property.key.getSoleLiteral();
        const schema = (0, application_schema_1.application_schema)(options)(true)(components)(property.value)({
            deprecated: property.jsDocTags.some((tag) => tag.name === "deprecated") || undefined,
            title: (() => {
                const info = property.jsDocTags.find((tag) => tag.name === "title");
                return info?.text?.length
                    ? CommentFactory_1.CommentFactory.merge(info.text)
                    : undefined;
            })(),
            description: property.description ?? undefined,
            "x-typia-jsDocTags": property.jsDocTags.length
                ? property.jsDocTags
                : undefined,
            "x-typia-required": property.value.required,
            "x-typia-optional": property.value.optional,
        });
        if (schema === null)
            continue;
        else if (key !== null) {
            properties[key] = schema;
            if (property.value.isRequired() === true)
                required.push(key);
        }
        else {
            const pattern = (0, metadata_to_pattern_1.metadata_to_pattern)(true)(property.key);
            if (pattern === PatternUtil_1.PatternUtil.STRING)
                extraMeta.additionalProperties = [property.value, schema];
            else
                extraMeta.patternProperties[pattern] = [
                    property.value,
                    schema,
                ];
        }
    }
    const extraProps = {
        additionalProperties: extraMeta.additionalProperties?.[1],
        patternProperties: (() => {
            if (Object.keys(extraMeta.patternProperties).length === 0)
                return undefined;
            const output = {};
            for (const [key, value] of Object.entries(extraMeta.patternProperties))
                output[key] = value[1];
            return output;
        })(),
    };
    const schema = {
        $id: options.purpose === "ajv" ? $id : undefined,
        // $recursiveAnchor:
        //     (options.purpose === "ajv" && obj.recursive) || undefined,
        type: "object",
        properties,
        nullable: options.purpose === "swagger" ? nullable : undefined,
        required: required.length ? required : undefined,
        description: obj.description,
        "x-typia-jsDocTags": obj.jsDocTags,
        ...(options.purpose === "ajv"
            ? extraProps
            : {
                // swagger can't express patternProperties
                "x-typia-additionalProperties": extraProps.additionalProperties,
                "x-typia-patternProperties": extraProps.patternProperties,
                additionalProperties: join(options)(components)(extraMeta),
            }),
    };
    components.schemas[key] = schema;
    return output;
};
exports.application_object = application_object;
const join = (options) => (components) => (extra) => {
    // LIST UP METADATA
    const elements = Object.values(extra.patternProperties || {});
    if (extra.additionalProperties)
        elements.push(extra.additionalProperties);
    // SHORT RETURN
    if (elements.length === 0)
        return undefined;
    else if (elements.length === 1)
        return elements[0][1];
    // MERGE METADATA AND GENERATE VULNERABLE SCHEMA
    const meta = elements
        .map((tuple) => tuple[0])
        .reduce((x, y) => Metadata_1.Metadata.merge(x, y));
    return ((0, application_schema_1.application_schema)(options)(true)(components)(meta)({
        "x-typia-required": false,
    }) ?? undefined);
};
