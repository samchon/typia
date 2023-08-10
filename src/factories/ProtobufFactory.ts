import ts from "typescript";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObject } from "../schemas/metadata/MetadataObject";
import { IProtocolMessage } from "../schemas/protobuf/IProtocolMessage";

import { MetadataCollection } from "./MetadataCollection";
import { MetadataFactory } from "./MetadataFactory";
import { emplace_protocol_object } from "./internal/protocols/emplace_protocol_object";
import { iterate_protocol_main } from "./internal/protocols/iterate_protocol_main";

export namespace ProtobufFactory {
    export const metadata =
        (method: string) =>
        (checker: ts.TypeChecker) =>
        (collection: MetadataCollection) =>
        (type: ts.Type) => {
            // COMPOSE METADATA WITH INDIVIDUAL VALIDATIONS
            const top: Metadata = MetadataFactory.analyze(checker)({
                resolve: false,
                constant: true,
                absorb: true,
                validate: validate(method),
            })(collection)(type);

            // TOP LEVEL TYPE MUST BE A SINGLE OBJECT
            const onlyObject: boolean =
                top.size() === 1 &&
                top.objects.length === 1 &&
                top.objects[0]!.properties.every((p) =>
                    p.key.isSoleLiteral(),
                ) &&
                top.isRequired() === true &&
                top.nullable === false;
            if (onlyObject === false)
                throw new Error(
                    `${prefix(
                        method,
                    )} target type must be a sole and static object.`,
                );

            return top;
        };

    export const analyze =
        (collection: MetadataCollection) =>
        (dict: Map<string, IProtocolMessage>) =>
        (meta: Metadata) => {
            // EMPLACE OBJECTS
            for (const obj of collection.objects())
                emplace_protocol_object(dict)(obj);

            // WHEN NOT OBJECT, WRAP IT INTO A FAKE MAIN OBJECT
            iterate_protocol_main(dict)(meta);
        };

    const validate = (method: string) => (meta: Metadata) => {
        //----
        // NOT ALLOWED TYPES
        //----
        if (meta.any) throw notSupportedError({ method })("any type");
        else if (meta.functional)
            throw notSupportedError({ method })("functional type");
        else if (meta.tuples.length)
            throw notSupportedError({ method })("tuple type");
        else if (meta.sets.length)
            throw notSupportedError({ method })("Set type");
        else if (
            meta.arrays.length &&
            meta.arrays.some((array) => !!array.value.arrays.length)
        )
            throw notSupportedError({ method })("two dimenstional array type");
        //----
        // SPECIAL CASES
        //----
        // MULTIPLE DYNAMIC KEY TYPED PROPERTIES
        else if (
            meta.objects.length &&
            meta.objects.some(
                (obj) =>
                    obj.properties.filter((p) => !p.key.isSoleLiteral())
                        .length > 1,
            )
        )
            throw notSupportedError({ method })(
                "object type with multiple dynamic key typed properties. Keep only one.",
            );
        // STATIC AND DYNAMIC PROPERTIES ARE COMPATIBLE
        else if (
            meta.objects.length &&
            meta.objects.some(
                (obj) =>
                    obj.properties.length &&
                    obj.properties.some((p) => p.key.isSoleLiteral()) &&
                    obj.properties.some((p) => !p.key.isSoleLiteral()),
            )
        )
            throw notSupportedError({ method })(
                "object type with mixed static and dynamic key typed properties. Keep statics or dynamic only.",
            );
        // NATIVE TYPE, BUT NOT Uint8Array
        else if (meta.natives.length) {
            const banned = meta.natives
                .map((n) => [n, BANNED_NATIVE_TYPES.get(n)] as const)
                .filter(([_n, b]) => b !== undefined)[0];
            if (banned !== undefined)
                throw notSupportedError({ method })(
                    banned[1] === null
                        ? banned[0]
                        : `${banned[0]}. Use ${banned[1]} instead.`,
                );
        }
        // MAP TYPE, BUT PROPERTY KEY TYPE IS NOT ATOMIC
        else if (
            meta.maps.length &&
            meta.maps.some((m) => !is_atomic_key(m.key))
        )
            throw notSupportedError({ method })("");
        //----
        // UNION TYPES
        //----
        // UNION IN ARRAY
        else if (
            meta.arrays.length &&
            meta.arrays.some((a) => a.value.size() > 1)
        )
            throw notSupportedError({ method })("union type in array");
        // UNION WITH ARRAY
        else if (meta.size() > 1 && meta.arrays.length)
            throw notSupportedError({ method })("union type with array type");
        // UNION WITH DYNAMIC OBJECT
        else if (
            meta.size() > 1 &&
            meta.objects.length &&
            isDynamicObject(meta.objects[0]!)
        )
            throw notSupportedError({ method })(
                "union type with dynamic object type",
            );
        // UNION IN DYNAMIC PROPERTY VALUE
        else if (
            meta.objects.length &&
            meta.objects.some(
                (obj) =>
                    isDynamicObject(obj) &&
                    obj.properties.some((p) => isUnion(p.value)),
            )
        )
            throw notSupportedError({ method })(
                "union type in dynamic property",
            );
        // UNION WITH MAP
        else if (meta.size() > 1 && meta.maps.length)
            throw notSupportedError({ method })("union type with map type");
        // UNION IN MAP
        else if (meta.maps.length && meta.maps.some((m) => isUnion(m.value)))
            throw notSupportedError({ method })("union type in map");
    };

    const is_atomic_key = (key: Metadata) => {
        if (
            key.required &&
            key.nullable === false &&
            key.functional === false &&
            key.resolved === null &&
            key.size() ===
                key.atomics.length +
                    key.constants
                        .map((c) => c.values.length)
                        .reduce((a, b) => a + b, 0) +
                    key.templates.length
        ) {
            const set: Set<string> = new Set();
            for (const atomic of key.atomics) set.add(atomic);
            for (const constant of key.constants) set.add(constant.type);
            if (key.templates.length) set.add("string");

            return set.size === 1;
        }
        return false;
    };
}

const prefix = (method: string) => `Error on typia.protobuf.${method}():`;

const notSupportedError = (p: { method: string }) => (title: string) =>
    new Error(
        `${prefix(p.method)}: protocol buffer does not support ${title}.`,
    );

const isDynamicObject = (obj: MetadataObject): boolean => {
    return (
        obj.properties.length > 0 &&
        obj.properties[0]!.key.isSoleLiteral() === false
    );
};

const isUnion = (meta: Metadata): boolean => {
    const count: number =
        new Set([
            ...meta.atomics,
            ...meta.constants.map((c) => c.type),
            ...(meta.templates.length ? ["string"] : []),
        ]).size +
        meta.arrays.length +
        meta.tuples.length +
        meta.natives.length +
        meta.objects.length +
        meta.maps.length;
    return count > 1;
};

const BANNED_NATIVE_TYPES: Map<string, string | null> = new Map([
    ["Date", "string"],
    ["Boolean", "boolean"],
    ["BigInt", "bigint"],
    ["Number", "number"],
    ["String", "string"],
    ...[
        "Buffer",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "BigUint64Array",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "BigInt64Array",
        "Float32Array",
        "Float64Array",
        "DataView",
        "ArrayBuffer",
        "SharedArrayBuffer",
    ].map((name) => [name, "Uint8Array"] as const),
]);
