import ts from "typescript";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObject } from "../schemas/metadata/MetadataObject";

import { ProtobufUtil } from "../programmers/helpers/ProtobufUtil";

import { Escaper } from "../utils/Escaper";

import { MetadataCollection } from "./MetadataCollection";
import { MetadataFactory } from "./MetadataFactory";

export namespace ProtobufFactory {
    export const metadata =
        (method: string) =>
        (checker: ts.TypeChecker) =>
        (collection: MetadataCollection) =>
        (type: ts.Type) => {
            // COMPOSE METADATA WITH INDIVIDUAL VALIDATIONS
            const top: Metadata = MetadataFactory.analyze(checker)({
                escape: false,
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

    const validate = (method: string) => (meta: Metadata) => {
        //----
        // NOT SUPPORTED TYPES
        //----
        // PROHIBIT ANY TYPE
        if (meta.any) throw notSupportedError({ method })("any type");
        // PROHIBIT FUNCTIONAL TYPE
        else if (meta.functional)
            throw notSupportedError({ method })("functional type");
        // PROHIBIT TUPLE TYPE
        else if (meta.tuples.length)
            throw notSupportedError({ method })("tuple type");
        // PROHIBIT SET TYPE
        else if (meta.sets.length)
            throw notSupportedError({ method })("Set type");
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
        //----
        // ARRRAY CASES
        //----
        // DO NOT ALLOW MULTI-DIMENTIONAL ARRAY
        else if (
            meta.arrays.length &&
            meta.arrays.some((array) => !!array.value.arrays.length)
        )
            throw notSupportedError({ method })("two dimenstional array type");
        // CHILD OF ARRAY TYPE MUST BE REQUIRED
        else if (
            meta.arrays.length &&
            meta.arrays.some(
                (array) =>
                    array.value.isRequired() === false ||
                    array.value.nullable === true,
            )
        )
            throw notSupportedError({ method })("optional type in array");
        // UNION IN ARRAY
        else if (
            meta.arrays.length &&
            meta.arrays.some((a) => a.value.size() > 1)
        )
            throw notSupportedError({ method })("union type in array");
        // DO DYNAMIC OBJECT IN ARRAY
        else if (
            meta.arrays.length &&
            meta.arrays.some(
                (a) =>
                    a.value.maps.length ||
                    (a.value.objects.length &&
                        a.value.objects.some(
                            (o) => ProtobufUtil.isStaticObject(o) === false,
                        )),
            )
        )
            throw notSupportedError({ method })("dynamic object in array");
        // UNION WITH ARRAY
        else if (meta.size() > 1 && meta.arrays.length)
            throw notSupportedError({ method })("union type with array type");
        //----
        // OBJECT CASES
        //----
        // EMPTY PROPERTY
        else if (
            meta.objects.length &&
            meta.objects.some((obj) => obj.properties.length === 0)
        )
            throw notSupportedError({ method })("empty object type");
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
                    obj.properties.some((p) => p.key.isSoleLiteral()) &&
                    obj.properties.some((p) => !p.key.isSoleLiteral()),
            )
        )
            throw notSupportedError({ method })(
                "object type with mixed static and dynamic key typed properties. Keep statics or dynamic only.",
            );
        // STATIC PROPERTY, BUT INVALID KEY NAME
        else if (
            meta.objects.length &&
            meta.objects.some((obj) =>
                obj.properties.some(
                    (p) =>
                        p.key.isSoleLiteral() &&
                        !Escaper.variable(p.key.getSoleLiteral()!),
                ),
            )
        )
            throw notSupportedError({ method })(
                `object type with invalid static key name.`,
            );
        // DYNAMIC OBJECT, BUT PROPERTY VALUE TYPE IS ARRAY
        else if (
            meta.objects.length &&
            isDynamicObject(meta.objects[0]!) &&
            meta.objects[0]!.properties.some((p) => !!p.value.arrays.length)
        )
            throw notSupportedError({ method })(
                "dynamic object with array value type",
            );
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
                    obj.properties.some((p) => p.value.isBinaryUnion()),
            )
        )
            throw notSupportedError({ method })(
                "union type in dynamic property",
            );
        //----
        // MAP CASES
        //----
        // MAP TYPE, BUT PROPERTY KEY TYPE IS NOT STRING
        else if (
            meta.maps.length &&
            meta.maps.some(
                (m) =>
                    m.key.isBinaryUnion() ||
                    (m.key.atomics.find((v) => v === "string") === undefined &&
                        m.key.constants.find((c) => c.type === "string") ===
                            undefined),
            )
        )
            throw notSupportedError({ method })("non-string key typed map");
        // MAP TYPE, BUT PROPERTY KEY TYPE IS OPTIONAL
        else if (
            meta.maps.length &&
            meta.maps.some(
                (m) => m.key.isRequired() === false || m.key.nullable,
            )
        )
            throw notSupportedError({ method })("optional key typed map");
        // MAP TYPE, BUT VALUE TYPE IS ARRAY
        else if (
            meta.maps.length &&
            meta.maps.some((m) => !!m.value.arrays.length)
        )
            throw notSupportedError({ method })(
                "map type with array value type",
            );
        // UNION WITH MAP
        else if (meta.size() > 1 && meta.maps.length)
            throw notSupportedError({ method })("union type with map type");
        // UNION IN MAP
        else if (
            meta.maps.length &&
            meta.maps.some((m) => m.value.isBinaryUnion())
        )
            throw notSupportedError({ method })("union type in map");
    };
}

const prefix = (method: string) => `Error on ${method}():`;

const notSupportedError = (p: { method: string }) => (title: string) =>
    new Error(
        `${prefix(p.method)}: protocol buffer does not support ${title}.`,
    );

const isDynamicObject = (obj: MetadataObject): boolean =>
    obj.properties[0]!.key.isSoleLiteral() === false;

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
