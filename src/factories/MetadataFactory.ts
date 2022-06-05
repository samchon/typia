import crypto from "crypto";
import ts from "typescript";
import { Singleton } from "tstl/thread/Singleton";

import { IMetadata } from "../structures/IMetadata";
import { MetadataCollection } from "../storages/MetadataCollection";
import { TypeFactory } from "./TypeFactry";
import { CommentFactory } from "./CommentFactory";

export namespace MetadataFactory {
    export import Collection = MetadataCollection;

    export function generate(
        checker: ts.TypeChecker,
        type: ts.Type | null,
        collection: Collection = new Collection(true),
    ): IMetadata.IApplication | null {
        // CONSTRUCT SCHEMA WITH OBJECTS
        const metadata: IMetadata | null = explore(collection, checker, type);
        if (metadata === null) return null;

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
        return { metadata, storage };
    }

    function explore(
        collection: Collection,
        checker: ts.TypeChecker,
        type: ts.Type | null,
    ): IMetadata | null {
        if (type === null) return null;

        const schema: IMetadata = {
            atomics: new Set(),
            arraies: new Map(),
            tuples: new Map(),
            objects: new Map(),
            nullable: false,
            required: true,
        };
        if (iterate(collection, checker, schema, type) === false) return null;
        return schema;
    }

    function iterate(
        collection: Collection,
        checker: ts.TypeChecker,
        schema: IMetadata,
        type: ts.Type,
        parentEscaped: boolean = false,
    ): boolean {
        // ESCAPE toJSON() METHOD
        const [converted, partialEscaped] = TypeFactory.escape(checker, type);
        if (partialEscaped === true) type = converted;

        // WHEN UNION TYPE
        const escaped: boolean = partialEscaped || parentEscaped;
        if (type.isUnion())
            return type.types.every((t) =>
                iterate(collection, checker, schema, t, escaped),
            );

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
                schema.atomics.add(className.toLowerCase());
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
            return escaped ? false : (schema.nullable = true);
        else if (
            filter(ts.TypeFlags.Undefined) ||
            filter(ts.TypeFlags.Void) ||
            filter(ts.TypeFlags.VoidLike)
        )
            return escaped ? false : !(schema.required = false);

        // ATOMIC VALUE TYPES
        for (const [flag, literal, className] of ATOMICS.get())
            if (check(flag, literal, className) === true)
                return escaped ? false : true;

        // WHEN TUPLE
        if ((checker as any).isTupleType(type)) {
            if (escaped) return false;

            const children: Array<IMetadata | null> = [];
            for (const elem of checker.getTypeArguments(
                type as ts.TypeReference,
            )) {
                const schema: IMetadata | null = explore(
                    collection,
                    checker,
                    elem,
                );
                children.push(schema);
            }

            const key: string = children
                .map((child) => get_uid(child))
                .reduce((x, y) => x + y, "");
            schema.tuples.set(key, children);
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
                elemType,
            );
            if (elemSchema === null) return false;

            const key: string = get_uid(elemSchema);
            schema.arraies.set(key, elemSchema);
        }

        // WHEN OBJECT, MAYBE
        else if (filter(ts.TypeFlags.Object)) {
            if (type.isIntersection()) {
                const fakeCollection = new Collection(true);
                const fakeSchema: IMetadata = {
                    atomics: new Set(),
                    arraies: new Map(),
                    tuples: new Map(),
                    objects: new Map(),
                    nullable: false,
                    required: true,
                };
                if (
                    type.types.every((t) =>
                        iterate(fakeCollection, checker, fakeSchema, t),
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

            const [key, object] = emplace(
                collection,
                checker,
                type,
                schema.nullable,
            );
            schema.objects.set(key, object);
        }
        return !escaped;
    }

    function emplace(
        collection: Collection,
        checker: ts.TypeChecker,
        parent: ts.Type,
        nullable: boolean,
    ): [string, IMetadata.IObject] {
        // CHECK MEMORY
        const [id, object, newbie] = collection.emplace(
            checker,
            parent,
            nullable,
        );
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
            const child: IMetadata | null = explore(collection, checker, type);
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

    function get_uid(schema: IMetadata | null): string {
        if (schema === null) return "null";

        return crypto
            .createHash("sha256")
            .update(JSON.stringify(to_primitive(schema)))
            .digest("base64");
    }

    function to_primitive(schema: IMetadata | null): any {
        if (schema === null) return null;
        return {
            atomics: Array.from(schema.atomics),
            arraies: [...schema.arraies].map(([key, value]) => [
                key,
                to_primitive(value),
            ]),
            tuples: [...schema.tuples].map(([key, array]) => [
                key,
                array.map((value) => to_primitive(value)),
            ]),
            objects: Array.from(schema.objects),
            nullable: schema.nullable,
        };
    }
}

const ATOMICS: Singleton<[ts.TypeFlags, ts.TypeFlags, string][]> =
    new Singleton(() => [
        [ts.TypeFlags.BooleanLike, ts.TypeFlags.BooleanLiteral, "Boolean"],
        [ts.TypeFlags.NumberLike, ts.TypeFlags.NumberLiteral, "Number"],
        [ts.TypeFlags.BigIntLike, ts.TypeFlags.BigIntLiteral, "BigInt"],
        [ts.TypeFlags.StringLike, ts.TypeFlags.StringLiteral, "String"],
    ]);
