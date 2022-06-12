import crypto from "crypto";
import ts from "typescript";

import { IMetadata } from "../structures/IMetadata";
import { MetadataCollection } from "./MetadataCollection";
import { CommentFactory } from "./CommentFactory";
import { TypeFactory } from "./TypeFactory";
import { MapUtil } from "../utils/MapUtil";

export namespace MetadataFactory {
    export interface IOptions {
        escape: boolean;
        accumulate: boolean;
    }

    export function generate(
        collection: MetadataCollection,
        checker: ts.TypeChecker,
        type: ts.Type | null,
        options: IOptions,
    ): IMetadata | null {
        // CONSTRUCT SCHEMA WITH OBJECTS
        const metadata: IMetadata | null = explore(
            collection,
            checker,
            options,
            type,
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
    ): IMetadata | null {
        if (type === null) return null;

        const meta: IMetadata = IMetadata.create();
        return iterate(collection, checker, options, meta, type, false)
            ? meta
            : null;
    }

    function iterate(
        collection: MetadataCollection,
        checker: ts.TypeChecker,
        options: IOptions,
        meta: IMetadata,
        type: ts.Type,
        escaped: boolean,
    ): boolean {
        // WHEN UNION TYPE
        if (type.isUnion())
            return type.types.every((t) =>
                iterate(collection, checker, options, meta, t, escaped),
            );

        // ESCAPE toJSON() METHOD
        if (options.escape === true) {
            const resolved: ts.Type | null = TypeFactory.escape(checker, type);
            if (resolved !== null) {
                if (options.accumulate === false)
                    return iterate(
                        collection,
                        checker,
                        options,
                        meta,
                        resolved,
                        true,
                    );
                else {
                    const child: IMetadata | null = explore(
                        collection,
                        checker,
                        options,
                        resolved,
                    );
                    meta.jsons.set(get_uid(child), child);
                }
            }
        }

        // NODE AND ATOMIC TYPE CHECKER
        const node: ts.TypeNode | undefined = checker.typeToTypeNode(
            type,
            undefined,
            undefined,
        );
        if (!node) return false;

        const filter = (flag: ts.TypeFlags) => (type.getFlags() & flag) !== 0;
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

        // UNKNOWN, NULL OR UNDEFINED
        if (
            filter(ts.TypeFlags.Unknown) ||
            filter(ts.TypeFlags.Never) ||
            filter(ts.TypeFlags.Any)
        )
            return false;
        else if (filter(ts.TypeFlags.Null))
            return escaped ? false : (meta.nullable = true);
        else if (
            filter(ts.TypeFlags.Undefined) ||
            filter(ts.TypeFlags.Void) ||
            filter(ts.TypeFlags.VoidLike)
        )
            return escaped ? false : !(meta.required = false);

        // CONSTANT TYPE
        if (type.isLiteral()) {
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
            return !escaped;
        } else if (filter(ts.TypeFlags.BooleanLiteral)) {
            MapUtil.take(meta.constants, "boolean", () => new Set()).add(
                checker.typeToString(type) === "true",
            );
            return !escaped;
        }

        // ATOMIC VALUE TYPES
        for (const [flag, literal, className] of ATOMICS)
            if (check(flag, literal, className) === true) return !escaped;

        // WHEN TUPLE
        if ((checker as any).isTupleType(type)) {
            if (escaped) return false;

            const children: Array<IMetadata | null> = [];
            for (const elem of checker.getTypeArguments(
                type as ts.TypeReference,
            )) {
                const child: IMetadata | null = explore(
                    collection,
                    checker,
                    options,
                    elem,
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
            if (escaped) return false;

            const elemType: ts.Type | null = type.getNumberIndexType() || null;
            const elemSchema: IMetadata | null = explore(
                collection,
                checker,
                options,
                elemType,
            );
            if (elemSchema === null) return false;

            const key: string = get_uid(elemSchema);
            meta.arraies.set(key, elemSchema);
        }

        // WHEN OBJECT, MAYBE
        else if (filter(ts.TypeFlags.Object)) {
            if (type.isIntersection()) {
                const fakeCollection = new MetadataCollection();
                const fakeSchema: IMetadata = IMetadata.create();

                if (
                    type.types.every((t) =>
                        iterate(
                            fakeCollection,
                            checker,
                            options,
                            fakeSchema,
                            t,
                            false,
                        ),
                    ) === false
                )
                    return false;
                else if (
                    fakeSchema.atomics.size ||
                    fakeSchema.arraies.size ||
                    !fakeSchema.objects.size
                )
                    return false;
            }

            const [key, object] = emplace(collection, checker, options, type);
            meta.objects.set(key, [object, meta.nullable]);
        }
        return !escaped;
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
                  ts.isPropertySignature(node) || ts.isTypeLiteralNode(node);

        for (const prop of parent.getApparentProperties()) {
            // CHECK NODE IS A FORMAL PROPERTY
            const node: ts.PropertyDeclaration | undefined =
                (prop.getDeclarations() || [])[0] as
                    | ts.PropertyDeclaration
                    | undefined;
            if (!node || !pred(node)) continue;
            else if (
                node
                    .getChildren()
                    .some((child) => TypeFactory.is_function(child))
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
            const child: IMetadata | null = explore(
                collection,
                checker,
                options,
                type,
            );
            if (child && node.questionToken) child.required = false;
            if (child)
                child.description =
                    CommentFactory.generate(
                        prop.getDocumentationComment(checker),
                    ) || undefined;
            object.properties[key] = child;
        }
        return [id, object];
    }

    function get_uid(meta: IMetadata | null): string {
        if (meta === null) return "null";

        return crypto
            .createHash("sha256")
            .update(JSON.stringify(to_primitive(meta)))
            .digest("base64");
    }

    function to_primitive(meta: IMetadata | null): any {
        if (meta === null) return null;
        return {
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
