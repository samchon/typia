"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_schema = void 0;
const MetadataAtomic_1 = require("../../schemas/metadata/MetadataAtomic");
const AtomicPredicator_1 = require("../helpers/AtomicPredicator");
const application_alias_1 = require("./application_alias");
const application_array_1 = require("./application_array");
const application_boolean_1 = require("./application_boolean");
const application_constant_1 = require("./application_constant");
const application_escaped_1 = require("./application_escaped");
const application_native_1 = require("./application_native");
const application_number_1 = require("./application_number");
const application_object_1 = require("./application_object");
const application_string_1 = require("./application_string");
const application_templates_1 = require("./application_templates");
const application_tuple_1 = require("./application_tuple");
/**
 * @internal
 */
const application_schema = (options) => (blockNever) => (components) => (meta) => (attribute) => {
    // VULNERABLE CASE
    if (meta.any === true)
        return {
            ...attribute,
            type: undefined,
        };
    else if (meta.nullable && meta.empty())
        return { type: "null", ...attribute };
    //----
    // GATHER UNION SCHEMAS
    //----
    const union = [];
    if (meta.nullable && options.purpose !== "swagger")
        union.push({
            ...attribute,
            type: "null",
        });
    const insert = meta.nullable && options.purpose === "swagger"
        ? (s) => union.push({
            ...s,
            nullable: s.type
                ? true
                : undefined,
        })
        : (schema) => union.push(schema);
    // toJSON() METHOD
    if (meta.escaped !== null)
        union.push(...(0, application_escaped_1.application_escaped)(options)(blockNever)(components)(meta.escaped)(attribute));
    // ATOMIC TYPES
    if (meta.templates.length && AtomicPredicator_1.AtomicPredicator.template(meta))
        insert((0, application_templates_1.application_templates)(meta)(attribute));
    for (const constant of meta.constants)
        if (constant.type === "bigint")
            throw new TypeError(NO_BIGINT);
        else if ((constant.type === "string" && meta.templates.length) ||
            AtomicPredicator_1.AtomicPredicator.constant(meta)(constant.type) === false)
            continue;
        else
            insert((0, application_constant_1.application_constant)(constant)(attribute));
    for (const a of meta.atomics)
        if (a.type === "bigint")
            throw new TypeError(NO_BIGINT);
        else if (a.type === "boolean")
            insert((0, application_boolean_1.application_boolean)(attribute));
        else if (a.type === "number")
            (0, application_number_1.application_number)(a)(attribute).forEach((s) => insert(s));
        else if (a.type === "string")
            (0, application_string_1.application_string)(meta)(a)(attribute).forEach((s) => insert(s));
    // ARRAY
    for (const array of meta.arrays)
        (0, application_array_1.application_array)(options)(components)(array)(attribute).forEach((s) => insert(s));
    // TUPLE
    for (const tuple of meta.tuples)
        insert((0, application_tuple_1.application_tuple)(options)(components)(tuple)(attribute));
    // NATIVES
    for (const native of meta.natives)
        if (AtomicPredicator_1.AtomicPredicator.native(native)) {
            const type = native.toLowerCase();
            if (meta.atomics.some((a) => a.type === type))
                continue;
            else if (type === "bigint")
                throw new TypeError(NO_BIGINT);
            else if (type === "boolean")
                insert((0, application_boolean_1.application_boolean)(attribute));
            else if (type === "number")
                insert((0, application_number_1.application_number)(MetadataAtomic_1.MetadataAtomic.create({
                    type: "number",
                    tags: [],
                }))(attribute)[0]);
            else if (type === "string")
                insert((0, application_string_1.application_string)(meta)(MetadataAtomic_1.MetadataAtomic.create({
                    type: "string",
                    tags: [],
                }))(attribute)[0]);
        }
        else
            insert((0, application_native_1.application_native)(options)(components)(native)({
                nullable: meta.nullable,
                attribute,
            }));
    if (meta.sets.length)
        insert((0, application_native_1.application_native)(options)(components)(`Set`)({
            nullable: meta.nullable,
            attribute,
        }));
    if (meta.maps.length)
        insert((0, application_native_1.application_native)(options)(components)(`Map`)({
            nullable: meta.nullable,
            attribute,
        }));
    // OBJECT
    for (const obj of meta.objects)
        insert((0, application_object_1.application_object)(options)(components)(obj)(meta.nullable));
    // ALIASES
    for (const alias of meta.aliases)
        insert((0, application_alias_1.application_alias)(options)(blockNever)(components)(alias)(meta.nullable));
    //----
    // RETURNS
    //----
    if (union.length === 0)
        return blockNever === true
            ? null
            : {
                ...attribute,
                type: undefined,
            };
    else if (union.length === 1)
        return union[0];
    return { oneOf: union, ...attribute };
};
exports.application_schema = application_schema;
const NO_BIGINT = "Error on typia.application(): does not allow bigint type.";
