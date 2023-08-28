"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_native = void 0;
const JSON_SCHEMA_PREFIX_1 = require("./JSON_SCHEMA_PREFIX");
/**
 * @internal
 */
const application_native = (options) => (components) => (name) => (props) => {
    const key = options.purpose === "ajv"
        ? name
        : `${name}${props.nullable ? ".Nullable" : ""}`;
    if (components.schemas?.[key] === undefined) {
        components.schemas ??= {};
        components.schemas[key] ??= {
            type: "object",
            $id: options.purpose === "ajv"
                ? `${JSON_SCHEMA_PREFIX_1.JSON_COMPONENTS_PREFIX}/objects/${key}`
                : undefined,
            properties: {},
            nullable: options.purpose === "swagger" ? props.nullable : undefined,
        };
    }
    return {
        ...props.attribute,
        $ref: `${JSON_SCHEMA_PREFIX_1.JSON_COMPONENTS_PREFIX}/objects/${key}`,
    };
};
exports.application_native = application_native;
