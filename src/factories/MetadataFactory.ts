import ts from "typescript";

import { MetadataCollection } from "./MetadataCollection";
import { CommentFactory } from "./CommentFactory";
import { TypeFactory } from "./TypeFactory";
import { MetadataObject } from "../metadata/MetadataObject";
import { ArrayUtil } from "../utils/ArrayUtil";
import { Metadata } from "../metadata/Metadata";
import { Writable } from "../typings/Writable";
import { MetadataProperty } from "../metadata/MetadataProperty";
import { MetadataConstant } from "../metadata/MetadataConstant";

export namespace MetadataFactory {
    export interface IOptions {
        resolve: boolean;
        constant: boolean;
    }

    export function generate(
        checker: ts.TypeChecker,
        collection: MetadataCollection,
        type: ts.Type | null,
        options: IOptions,
    ): Metadata {
        // CONSTRUCT SCHEMA WITH OBJECTS
        const metadata: Metadata = explore(
            collection,
            checker,
            options,
            type,
            false,
        );

        // FIND RECURSIVE OBJECTS
        for (const object of collection.objects())
            object.recursive = object.properties.some(
                (prop) =>
                    ArrayUtil.has(
                        prop.metadata.objects,
                        (elem) => elem.name === object.name,
                    ) ||
                    prop.metadata.arrays.some((meta) =>
                        ArrayUtil.has(
                            meta.objects,
                            (elem) => elem.name === object.name,
                        ),
                    ),
            );

        // RETURNS
        return metadata;
    }

    function explore(
        collection: MetadataCollection,
        checker: ts.TypeChecker,
        options: IOptions,
        type: ts.Type | null,
        parentResolved: boolean,
    ): Metadata {
        // CONSTRUCT METADATA
        const meta: Metadata = Metadata.initialize();
        if (type !== null)
            iterate(collection, checker, options, meta, type, parentResolved);

        // SORT OBJECTS
        if (meta.objects.length > 1) {
            meta.objects.sort((x, y) =>
                MetadataObject.covers(x, y)
                    ? -1
                    : MetadataObject.covers(y, x)
                    ? 1
                    : 0,
            );
            if (parentResolved === false)
                meta.union_index = collection.getUnionIndex(meta);
        }

        // SORT ARRAYS AND TUPLES
        if (meta.arrays.length > 1)
            meta.arrays.sort((x, y) =>
                Metadata.covers(x, y) ? -1 : Metadata.covers(y, x) ? 1 : 0,
            );
        if (meta.tuples.length > 1)
            meta.tuples.sort((x, y) => {
                const xt = Metadata.initialize();
                const yt = Metadata.initialize();

                xt.tuples.push(x);
                yt.tuples.push(y);

                return Metadata.covers(xt, yt)
                    ? -1
                    : Metadata.covers(yt, xt)
                    ? 1
                    : 0;
            });

        // RETURNS
        return meta;
    }

    function iterate(
        collection: MetadataCollection,
        checker: ts.TypeChecker,
        options: IOptions,
        meta: Metadata,
        type: ts.Type,
        parentResolved: boolean,
    ): void {
        if (type.isTypeParameter() === true)
            throw new Error(
                "Error on TSON.MetadataFactory.generate(): non-specified generic argument.",
            );

        // PREPARE INTERNAL FUNCTIONS
        const filter = (flag: ts.TypeFlags, t: ts.Type = type) =>
            (t.getFlags() & flag) !== 0;
        const check = (
            flag: ts.TypeFlags,
            literal: ts.TypeFlags,
            className: string,
        ) => {
            if (
                filter(flag) ||
                filter(literal) ||
                type.symbol?.escapedName === className
            ) {
                ArrayUtil.add(meta.atomics, className.toLowerCase());
                return true;
            }
            return false;
        };

        // WHEN UNION TYPE
        if (type.isUnion()) {
            if (options.resolve === false || parentResolved === true)
                return type.types.forEach((t) =>
                    iterate(collection, checker, options, meta, t, false),
                );

            const normals: ts.Type[] = [];
            const toJsons: ts.Type[] = [];

            for (const individual of type.types) {
                if (filter(ts.TypeFlags.Object, individual)) {
                    const resolved: ts.Type | null = TypeFactory.resolve(
                        checker,
                        individual,
                    );
                    if (resolved !== null) toJsons.push(resolved);
                    else normals.push(individual);
                } else normals.push(individual);
            }
            if (toJsons.length !== 0) {
                Writable(meta).resolved = (() => {
                    const union: Metadata = Metadata.initialize();
                    toJsons.forEach((t) =>
                        iterate(collection, checker, options, union, t, true),
                    );
                    if (union.objects.length > 1)
                        union.union_index = collection.getUnionIndex(union);
                    return union;
                })();
            }
            return normals.forEach((t) =>
                iterate(collection, checker, options, meta, t, false),
            );
        }

        // RESOLVE toJSON() METHOD
        if (options.resolve === true && parentResolved === false) {
            const resolved: ts.Type | null = TypeFactory.resolve(checker, type);
            if (resolved !== null) {
                Writable(meta).resolved = explore(
                    collection,
                    checker,
                    options,
                    resolved,
                    true,
                );
                return;
            }
        }

        // NODE AND ATOMIC TYPE CHECKER
        const node: ts.TypeNode | undefined = checker.typeToTypeNode(
            type,
            undefined,
            undefined,
        );
        if (node === undefined) return;

        // UNKNOWN, NULL, UNDEFINED OR FUNCTION
        if (
            filter(ts.TypeFlags.Unknown) ||
            filter(ts.TypeFlags.Never) ||
            filter(ts.TypeFlags.Any)
        ) {
            Writable(meta).any = true;
            return;
        } else if (filter(ts.TypeFlags.Null)) {
            Writable(meta).nullable = true;
            return;
        } else if (
            filter(ts.TypeFlags.Undefined) ||
            filter(ts.TypeFlags.Void) ||
            filter(ts.TypeFlags.VoidLike)
        ) {
            Writable(meta).required = false;
            return;
        } else if (TypeFactory.isFunction(type) === true) {
            Writable(meta).functional = true;
            return;
        }

        // CONSTANT TYPE
        if (options.constant && type.isLiteral()) {
            const value: string | number | bigint =
                typeof type.value === "object"
                    ? BigInt(
                          `${type.value.negative ? "-" : ""}${
                              type.value.base10Value
                          }`,
                      )
                    : type.value;
            const constant: MetadataConstant = ArrayUtil.take(
                meta.constants,
                (elem) => elem.type === typeof value,
                () => ({
                    type: typeof value as "number",
                    values: [],
                }),
            );
            ArrayUtil.add(
                constant.values as Array<any>,
                value,
                (a, b) => a === b,
            );
            return;
        } else if (options.constant && filter(ts.TypeFlags.BooleanLiteral)) {
            const value: boolean = checker.typeToString(type) === "true";
            const constant: MetadataConstant = ArrayUtil.take(
                meta.constants,
                (elem) => elem.type === "boolean",
                () => ({
                    type: "boolean",
                    values: [],
                }),
            );
            ArrayUtil.add(
                constant.values as boolean[],
                value,
                (a, b) => a === b,
            );
            return;
        }

        // ATOMIC VALUE TYPES
        for (const [flag, literal, className] of ATOMICS)
            if (check(flag, literal, className) === true) return;

        // WHEN TUPLE
        if ((checker as any).isTupleType(type)) {
            const children: Metadata[] = checker
                .getTypeArguments(type as ts.TypeReference)
                .map((elem) =>
                    explore(collection, checker, options, elem, false),
                );
            ArrayUtil.set(meta.tuples, children, join_tuple_names);
        }

        // WHEN ARRAY
        else if (
            (checker as any).isArrayType(type) ||
            (checker as any).isArrayLikeType(type)
        ) {
            const elemType: ts.Type | null = type.getNumberIndexType() || null;
            const elemMeta: Metadata = explore(
                collection,
                checker,
                options,
                elemType,
                false,
            );
            ArrayUtil.set(meta.arrays, elemMeta, (elem) => elem.getName());
        }

        // WHEN OBJECT, MAYBE
        else if (filter(ts.TypeFlags.Object) || type.isIntersection()) {
            if (type.isIntersection()) {
                const fakeCollection = new MetadataCollection();
                const fakeSchema: Metadata = Metadata.initialize();

                type.types.forEach((t) =>
                    iterate(
                        fakeCollection,
                        checker,
                        options,
                        fakeSchema,
                        t,
                        parentResolved,
                    ),
                );
                if (
                    fakeSchema.objects.length === 0 ||
                    fakeSchema.objects.length !== fakeSchema.size()
                )
                    return;
            }

            const obj: MetadataObject = emplace(
                collection,
                checker,
                options,
                type,
                meta.nullable,
            );
            ArrayUtil.add(meta.objects, obj, (elem) => elem.name === obj.name);
        }
    }

    function emplace(
        collection: MetadataCollection,
        checker: ts.TypeChecker,
        options: IOptions,
        parent: ts.Type,
        nullable: boolean,
    ): MetadataObject {
        // EMPLACE OBJECT
        const [obj, newbie] = collection.emplace(checker, parent);
        ArrayUtil.add(obj.nullables, nullable, (elem) => elem === nullable);
        if (newbie === false) return obj;

        // PREPARE ASSETS
        const isClass: boolean = parent.isClass();
        const pred: (node: ts.Declaration) => boolean = isClass
            ? (node) => ts.isParameter(node) || ts.isPropertyDeclaration(node)
            : (node) =>
                  ts.isPropertyAssignment(node) ||
                  ts.isPropertySignature(node) ||
                  ts.isTypeLiteralNode(node);

        for (const prop of parent.getProperties()) {
            // CHECK NODE IS A FORMAL PROPERTY
            const node: ts.PropertyDeclaration | undefined =
                (prop.getDeclarations() || [])[0] as
                    | ts.PropertyDeclaration
                    | undefined;

            if (!node || !pred(node)) continue;

            // CHECK NOT PRIVATE OR PROTECTED MEMBER
            if (isClass) {
                const kind: ts.SyntaxKind | undefined = node
                    .getChildren()[0]
                    ?.getChildren()[0]?.kind;
                if (
                    kind === ts.SyntaxKind.PrivateKeyword ||
                    kind === ts.SyntaxKind.ProtectedKeyword
                )
                    continue;
            }

            // GET EXACT TYPE
            const key: string = prop.name;
            const type: ts.Type = checker.getTypeOfSymbolAtLocation(prop, node);

            // CHILD METADATA BY ADDITIONAL EXPLORATION
            const child: Metadata = explore(
                collection,
                checker,
                options,
                type,
                false,
            );
            if (node.questionToken) Writable(child).required = false;

            // ADD TO OBJECT PROPERTY
            const property = MetadataProperty.create({
                name: key,
                metadata: child,
                description:
                    CommentFactory.generate(
                        prop.getDocumentationComment(checker),
                    ) || undefined,
            });
            obj.properties.push(property);
        }
        return obj;
    }
}

const ATOMICS: [ts.TypeFlags, ts.TypeFlags, string][] = [
    [ts.TypeFlags.BooleanLike, ts.TypeFlags.BooleanLiteral, "Boolean"],
    [ts.TypeFlags.NumberLike, ts.TypeFlags.NumberLiteral, "Number"],
    [ts.TypeFlags.BigIntLike, ts.TypeFlags.BigIntLiteral, "BigInt"],
    [ts.TypeFlags.StringLike, ts.TypeFlags.StringLiteral, "String"],
];
function join_tuple_names(metas: Metadata[]): string {
    return `[${metas.map((m) => m.getName).join(", ")}]`;
}
