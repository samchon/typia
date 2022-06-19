import crypto from "crypto";
import ts from "typescript";

import { IMetadata } from "../structures/IMetadata";
import { MetadataCollection } from "./MetadataCollection";
import { CommentFactory } from "./CommentAnalyzer";
import { TypeFactory } from "./TypeFactory";
import { MapUtil } from "../utils/MapUtil";

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
    ): IMetadata {
        // CONSTRUCT SCHEMA WITH OBJECTS
        const metadata: IMetadata = explore(
            collection,
            checker,
            options,
            type,
            false,
        );

        // FIND RECURSIVE OBJECTS
        const storage: IMetadata.IStorage = collection.storage();
        for (const object of Object.values(storage))
            object.recursive = Object.values(object.properties)
                .filter((prop) => !!prop)
                .some(
                    (prop) =>
                        prop!.objects.has(object.$id) ||
                        [...prop!.arraies.values()]
                            .filter((prop) => !!prop)
                            .some((prop) => prop!.objects.has(object.$id)),
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
    ): IMetadata {
        const meta: IMetadata = IMetadata.create();
        if (type !== null)
            iterate(collection, checker, options, meta, type, parentResolved);
        return meta;
    }

    function iterate(
        collection: MetadataCollection,
        checker: ts.TypeChecker,
        options: IOptions,
        meta: IMetadata,
        type: ts.Type,
        parentResolved: boolean,
    ): void {
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
                meta.atomics.add(className.toLowerCase());
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
                meta.resolved = (() => {
                    const union: IMetadata = IMetadata.create();
                    toJsons.forEach((t) =>
                        iterate(collection, checker, options, union, t, true),
                    );
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
                meta.resolved = explore(
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

        // UNKNOWN, NULL OR UNDEFINED
        if (
            filter(ts.TypeFlags.Unknown) ||
            filter(ts.TypeFlags.Never) ||
            filter(ts.TypeFlags.Any)
        ) {
            meta.any = true;
            return;
        } else if (filter(ts.TypeFlags.Null)) {
            meta.nullable = true;
            return;
        } else if (
            filter(ts.TypeFlags.Undefined) ||
            filter(ts.TypeFlags.Void) ||
            filter(ts.TypeFlags.VoidLike)
        ) {
            meta.required = false;
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
            MapUtil.take(meta.constants, typeof value, () => new Set()).add(
                value,
            );
            return;
        } else if (options.constant && filter(ts.TypeFlags.BooleanLiteral)) {
            MapUtil.take(meta.constants, "boolean", () => new Set()).add(
                checker.typeToString(type) === "true",
            );
            return;
        }

        // ATOMIC VALUE TYPES
        for (const [flag, literal, className] of ATOMICS)
            if (check(flag, literal, className) === true) return;

        // WHEN TUPLE
        if ((checker as any).isTupleType(type)) {
            const children: IMetadata[] = [];
            for (const elem of checker.getTypeArguments(
                type as ts.TypeReference,
            )) {
                const child: IMetadata = explore(
                    collection,
                    checker,
                    options,
                    elem,
                    false,
                );
                children.push(child);
            }

            const key: string = children
                .map((child) => get_uid(child))
                .reduce((x, y) => x + y, "");
            meta.tuples.set(key, children);
        }

        // WHEN ARRAY
        else if (
            (checker as any).isArrayType(type) ||
            (checker as any).isArrayLikeType(type)
        ) {
            const elemType: ts.Type | null = type.getNumberIndexType() || null;
            const elemSchema: IMetadata = explore(
                collection,
                checker,
                options,
                elemType,
                false,
            );
            const key: string = get_uid(elemSchema);
            meta.arraies.set(key, elemSchema);
        }

        // WHEN OBJECT, MAYBE
        if (filter(ts.TypeFlags.Object) || type.isIntersection()) {
            if (type.isIntersection()) {
                const fakeCollection = new MetadataCollection();
                const fakeSchema: IMetadata = IMetadata.create();

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
                    fakeSchema.objects.size === 0 ||
                    fakeSchema.objects.size !== IMetadata.size(fakeSchema)
                )
                    return;
            }

            const [key, object] = emplace(collection, checker, options, type);
            meta.objects.set(key, [object, meta.nullable]);
        }
    }

    function emplace(
        collection: MetadataCollection,
        checker: ts.TypeChecker,
        options: IOptions,
        parent: ts.Type,
    ): [string, IMetadata.IObject] {
        // CHECK MEMORY
        const [id, object, newbie] = collection.emplace(checker, parent);
        if (newbie === false) return [id, object];

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
            else if (
                node
                    .getChildren()
                    .some((child) => TypeFactory.isFunction(child))
            )
                continue;

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
            const child: IMetadata = explore(
                collection,
                checker,
                options,
                type,
                false,
            );
            object.properties[key] = child;
            child.description =
                CommentFactory.generate(
                    prop.getDocumentationComment(checker),
                ) || undefined;
            if (node.questionToken) child.required = false;
        }
        return [id, object];
    }

    function get_uid(meta: IMetadata): string {
        return crypto
            .createHash("sha256")
            .update(JSON.stringify(to_primitive(meta)))
            .digest("base64");
    }

    function to_primitive(meta: IMetadata): any {
        return {
            any: meta.any,
            resolved: meta.resolved ? to_primitive(meta.resolved) : undefined,
            constants: Array.from(meta.constants),
            atomics: Array.from(meta.atomics),
            arraies: [...meta.arraies].map(([key, value]) => [
                key,
                to_primitive(value),
            ]),
            tuples: [...meta.tuples].map(([key, array]) => [
                key,
                array.map((value) => to_primitive(value)),
            ]),
            objects: Array.from(meta.objects),
            nullable: meta.nullable,
        };
    }
}

const ATOMICS: [ts.TypeFlags, ts.TypeFlags, string][] = [
    [ts.TypeFlags.BooleanLike, ts.TypeFlags.BooleanLiteral, "Boolean"],
    [ts.TypeFlags.NumberLike, ts.TypeFlags.NumberLiteral, "Number"],
    [ts.TypeFlags.BigIntLike, ts.TypeFlags.BigIntLiteral, "BigInt"],
    [ts.TypeFlags.StringLike, ts.TypeFlags.StringLiteral, "String"],
];
