import ts from "typescript";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObject } from "../schemas/metadata/MetadataObject";

import { ProtobufUtil } from "../programmers/helpers/ProtobufUtil";

import { TransformerError } from "../transformers/TransformerError";

import { ValidationPipe } from "../typings/ValidationPipe";

import { Escaper } from "../utils/Escaper";

import { MetadataCollection } from "./MetadataCollection";
import { MetadataFactory } from "./MetadataFactory";

export namespace ProtobufFactory {
    export const metadata =
        (method: string) =>
        (checker: ts.TypeChecker) =>
        (collection: MetadataCollection) =>
        (type: ts.Type): Metadata => {
            // COMPOSE METADATA WITH INDIVIDUAL VALIDATIONS
            const result: ValidationPipe<Metadata, MetadataFactory.IError> =
                MetadataFactory.analyze(checker)({
                    escape: false,
                    constant: true,
                    absorb: true,
                    validate,
                })(collection)(type);
            if (result.success === false)
                throw TransformerError.from(`typia.protobuf.${method}`)(
                    result.errors,
                );
            return result.data;
        };

    const validate = (
        meta: Metadata,
        explore: MetadataFactory.IExplore,
    ): string[] => {
        const errors: string[] = [];
        const insert = (msg: string) => errors.push(msg);

        if (explore.top === true) {
            const onlyObject: boolean =
                meta.size() === 1 &&
                meta.objects.length === 1 &&
                meta.objects[0]!.properties.every((p) =>
                    p.key.isSoleLiteral(),
                ) &&
                meta.isRequired() === true &&
                meta.nullable === false;
            if (onlyObject === false)
                insert("target type must be a sole and static object type");
        }

        //----
        // NOT SUPPORTED TYPES
        //----
        const noSupport = (msg: string) => insert(`does not support ${msg}`);

        // PROHIBIT ANY TYPE
        if (meta.any) noSupport("any type");
        // PROHIBIT FUNCTIONAL TYPE
        if (meta.functional) noSupport("functional type");
        // PROHIBIT TUPLE TYPE
        if (meta.tuples.length) noSupport("tuple type");
        // PROHIBIT SET TYPE
        if (meta.sets.length) noSupport("Set type");
        // NATIVE TYPE, BUT NOT Uint8Array
        if (meta.natives.length)
            for (const native of meta.natives) {
                if (native === "Uint8Array") continue;

                const instead = BANNED_NATIVE_TYPES.get(native);
                if (instead === undefined) noSupport(`${native} type`);
                else noSupport(`${native} type. Use ${instead} type instead.`);
            }
        //----
        // ATOMIC CASES
        //----
        if (meta.atomics.length) {
            const numbers = ProtobufUtil.getNumbers(meta);
            const bigints = ProtobufUtil.getBigints(meta);

            for (const type of ["int64", "uint64"])
                if (
                    numbers.some((n) => n === type) &&
                    bigints.some((b) => b === type)
                )
                    insert(
                        `tags.Type<"${type}"> cannot be used in both number and bigint types. Recommend to remove from number type`,
                    );
        }
        //----
        // ARRRAY CASES
        //----
        // DO NOT ALLOW MULTI-DIMENTIONAL ARRAY
        if (
            meta.arrays.length &&
            meta.arrays.some((array) => !!array.type.value.arrays.length)
        )
            noSupport("over two dimenstional array type");
        // CHILD OF ARRAY TYPE MUST BE REQUIRED
        if (
            meta.arrays.length &&
            meta.arrays.some(
                (array) =>
                    array.type.value.isRequired() === false ||
                    array.type.value.nullable === true,
            )
        )
            noSupport("optional type in array");
        // UNION IN ARRAY
        if (
            meta.arrays.length &&
            meta.arrays.some((a) => a.type.value.size() > 1)
        )
            noSupport("union type in array");
        // DO DYNAMIC OBJECT IN ARRAY
        if (
            meta.arrays.length &&
            meta.arrays.some(
                (a) =>
                    a.type.value.maps.length ||
                    (a.type.value.objects.length &&
                        a.type.value.objects.some(
                            (o) => ProtobufUtil.isStaticObject(o) === false,
                        )),
            )
        )
            noSupport("dynamic object in array");
        // UNION WITH ARRAY
        if (meta.size() > 1 && meta.arrays.length)
            noSupport("union type with array type");
        //----
        // OBJECT CASES
        //----
        // EMPTY PROPERTY
        if (
            meta.objects.length &&
            meta.objects.some((obj) => obj.properties.length === 0)
        )
            noSupport("empty object type");
        // MULTIPLE DYNAMIC KEY TYPED PROPERTIES
        if (
            meta.objects.length &&
            meta.objects.some(
                (obj) =>
                    obj.properties.filter((p) => !p.key.isSoleLiteral())
                        .length > 1,
            )
        )
            noSupport(
                "object type with multiple dynamic key typed properties. Keep only one.",
            );
        // STATIC AND DYNAMIC PROPERTIES ARE COMPATIBLE
        if (
            meta.objects.length &&
            meta.objects.some(
                (obj) =>
                    obj.properties.some((p) => p.key.isSoleLiteral()) &&
                    obj.properties.some((p) => !p.key.isSoleLiteral()),
            )
        )
            noSupport(
                "object type with mixed static and dynamic key typed properties. Keep statics or dynamic only.",
            );
        // STATIC PROPERTY, BUT INVALID KEY NAME
        if (
            meta.objects.length &&
            meta.objects.some((obj) =>
                obj.properties.some(
                    (p) =>
                        p.key.isSoleLiteral() === true &&
                        Escaper.variable(p.key.getSoleLiteral()!) === false,
                ),
            )
        )
            noSupport(`object type with invalid static key name.`);
        // DYNAMIC OBJECT, BUT PROPERTY VALUE TYPE IS ARRAY
        if (
            meta.objects.length &&
            isDynamicObject(meta.objects[0]!) &&
            meta.objects[0]!.properties.some((p) => !!p.value.arrays.length)
        )
            noSupport("dynamic object with array value type");
        // UNION WITH DYNAMIC OBJECT
        if (
            meta.size() > 1 &&
            meta.objects.length &&
            isDynamicObject(meta.objects[0]!)
        )
            noSupport("union type with dynamic object type");
        // UNION IN DYNAMIC PROPERTY VALUE
        if (
            meta.objects.length &&
            meta.objects.some(
                (obj) =>
                    isDynamicObject(obj) &&
                    obj.properties.some((p) => ProtobufUtil.isUnion(p.value)),
            )
        )
            noSupport("union type in dynamic property");
        //----
        // MAP CASES
        //----
        // KEY TYPE IS UNION
        if (
            meta.maps.length &&
            meta.maps.some((m) => ProtobufUtil.isUnion(m.key))
        )
            noSupport("union key typed map");
        // KEY TYPE IS NOT ATOMIC
        if (
            meta.maps.length &&
            meta.maps.some((m) => ProtobufUtil.getAtomics(m.key).length !== 1)
        )
            noSupport("non-atomic key typed map");
        // MAP TYPE, BUT PROPERTY KEY TYPE IS OPTIONAL
        if (
            meta.maps.length &&
            meta.maps.some(
                (m) => m.key.isRequired() === false || m.key.nullable,
            )
        )
            noSupport("optional key typed map");
        // MAP TYPE, BUT VALUE TYPE IS ARRAY
        if (meta.maps.length && meta.maps.some((m) => !!m.value.arrays.length))
            noSupport("map type with array value type");
        // UNION WITH MAP
        if (meta.size() > 1 && meta.maps.length)
            noSupport("union type with map type");
        // UNION IN MAP
        if (
            meta.maps.length &&
            meta.maps.some((m) => ProtobufUtil.isUnion(m.value))
        )
            noSupport("union type in map value type");
        return errors;
    };
}

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
    ["WeakSet", "Array"],
    ["WeakMap", "Map"],
]);
