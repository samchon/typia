import crypto from "crypto";
import ts from "typescript";
import { HashMap } from "tstl/container/HashMap";
import { Pair } from "tstl/utility/Pair";
import { Singleton } from "tstl/thread/Singleton";

import { IMetadata } from "../structures/IMetadata";
import { TypeFactory } from "./TypeFactry";

export namespace MetadataFactory
{
    export class Collection
    {
        private readonly dict_: HashMap<Pair<ts.Type, boolean>, [string, IMetadata.IObject]>;
        private counter_: number;

        public constructor
            (
                public readonly inline: boolean
            )
        {
            this.dict_ = new HashMap();
            this.counter_ = 0;
        }

        public emplace(type: ts.Type, nullable: boolean): [string, IMetadata.IObject | null]
        {
            const key: Pair<ts.Type, boolean> = new Pair(type, nullable);
            const it = this.dict_.find(key);
            
            if (it.equals(this.dict_.end()) === false)
                return [it.second[0], null];
            
            const id: string = `o${this.counter_++}`;
            const obj: IMetadata.IObject = {
                nullable,
                properties: {}
            };
            this.dict_.emplace(key, [id, obj]);

            return [id, obj];
        }

        public storage(): IMetadata.IStorage
        {
            const storage: IMetadata.IStorage = {};
            for (const it of this.dict_)
                storage[it.second[0]] = it.second[1];
            return storage;
        }
    }

    export function generate
        (
            checker: ts.TypeChecker, 
            type: ts.Type | null,
            collection: Collection = new Collection(true),
        ): IMetadata.IApplication | null
    {
        // CONSTRUCT SCHEMA WITH OBJECTS
        const metadata: IMetadata | null = explore
        (
            collection, 
            checker, 
            type
        );
        if (metadata === null)
            return null;

        // RETURNS WITH STORAGE
        const storage: IMetadata.IStorage = collection.storage();
        return { metadata, storage };
    }

    function explore
        (
            collection: Collection,
            checker: ts.TypeChecker, 
            type: ts.Type | null,
        ): IMetadata | null
    {
        if (type === null)
            return null;

        const schema: IMetadata = {
            atomics: new Set(),
            arraies: new Map(),
            objects: new Set(),
            nullable: false,
            required: true,
        };
        if (iterate(collection, checker, schema, type) === false)
            return null;
        return schema;
    }

    function iterate
        (
            collection: Collection,
            checker: ts.TypeChecker,  
            schema: IMetadata, 
            type: ts.Type,
            parentEscaped: boolean = false
        ): boolean
    {
        const [converted, partialEscaped] = TypeFactory.escape(checker, type);
        if (partialEscaped === true)
            type = converted;
        
        const escaped: boolean = partialEscaped || parentEscaped;
        if (type.isUnion())
            return type.types.every(t => iterate(collection, checker, schema, t, escaped));

        const node: ts.TypeNode | undefined = checker.typeToTypeNode(type, undefined, undefined);
        if (!node)
            return false;

        const filter = (flag: ts.TypeFlags) => (type.getFlags() & flag) !== 0;
        const check = (flag: ts.TypeFlags, literal: ts.TypeFlags, className: string) =>
        {
            if (filter(flag) || filter(literal) || type.symbol?.escapedName === className)
            {
                schema.atomics.add(className.toLowerCase());
                return true;
            }
            return false
        };
        
        // UNKNOWN, NULL OR UNDEFINED
        if (filter(ts.TypeFlags.Unknown) || filter(ts.TypeFlags.Never) || filter(ts.TypeFlags.Any))
            return false;
        else if (filter(ts.TypeFlags.Null))
            return escaped ? false : schema.nullable = true;
        else if (filter(ts.TypeFlags.Undefined) || filter(ts.TypeFlags.Void) || filter(ts.TypeFlags.VoidLike))
            return escaped ? false : !(schema.required = false);

        // ATOMIC VALUE TYPES
        for (const [flag, literal, className] of ATOMICS.get())
            if (check(flag, literal, className) === true)
                return escaped ? false : true;
        
        // WHEN ARRAY
        if (ts.isArrayTypeNode(node))
        {
            if (escaped)
                return false;
                
            const elemType: ts.Type | null = checker.getTypeArguments(type as ts.TypeReference)[0] || null;
            const elemSchema: IMetadata | null = explore(collection, checker, elemType);
            
            const key: string = get_uid(elemSchema);
            schema.arraies.set(key, elemSchema);
        }

        // WHEN TUPLE
        else if (ts.isTupleTypeNode(node))
        {
            if (escaped || node.elements.length === 0)
                return false;

            const elemSchema: IMetadata | null = explore
            (
                collection,
                checker, 
                checker.getTypeFromTypeNode(node.elements[0]!),
            );
            if (elemSchema === null)
                return false;
            
            for (const elem of node.elements.slice(1))
                if (iterate(collection, checker, elemSchema, checker.getTypeFromTypeNode(elem)) === false)
                    return false;
        }

        // WHEN OBJECT, MAYBE
        else if (filter(ts.TypeFlags.Object))
        {
            if (type.isIntersection())
            {
                const fakeCollection = new Collection(true);
                const fakeSchema: IMetadata = {
                    atomics: new Set(),
                    arraies: new Map(),
                    objects: new Set(),
                    nullable: false,
                    required: true,
                };
                if (type.types.every(t => iterate(fakeCollection, checker, fakeSchema, t)) === false)
                    return false;
                else if (fakeSchema.atomics.size || fakeSchema.arraies.size || !fakeSchema.objects.size)
                    return false;
            }

            const key: string = emplace
            (
                collection, 
                checker,
                type, 
                schema.nullable
            );
            schema.objects.add(collection.inline 
                ? `components#/schemas/${key}`
                : `#/components/schemas/${key}`
            );
        }
        return !escaped;
    }

    function emplace
        (
            collection: Collection,
            checker: ts.TypeChecker,
            parent: ts.Type,
            nullable: boolean
        ): string
    {
        // CHECK MEMORY
        const [id, object] = collection.emplace(parent, nullable);
        if (object === null)
            return id;

        // PREPARE ASSETS
        const isClass: boolean = parent.isClass();
        const pred: (node: ts.Declaration) => boolean = isClass
            ? node => (ts.isParameter(node) || ts.isPropertyDeclaration(node))
            : node => (ts.isPropertySignature(node) || ts.isTypeLiteralNode(node));

        for (const prop of parent.getApparentProperties())
        {
            // CHECK NODE IS A FORMAL PROPERTY
            const node: ts.PropertyDeclaration | undefined = (prop.getDeclarations() || [])[0] as ts.PropertyDeclaration | undefined;
            if (!node || !pred(node))
                continue;
            else if (node.getChildren().some(child => TypeFactory.is_function(child)))
                continue;

            // CHECK NOT PRIVATE OR PROTECTED MEMBER
            if (isClass)
            {
                const kind: ts.SyntaxKind | undefined = node.getChildren()[0]?.getChildren()[0]?.kind;
                if (kind === ts.SyntaxKind.PrivateKeyword || kind === ts.SyntaxKind.ProtectedKeyword)
                    continue;
            }

            // GET EXACT TYPE
            const key: string = node.name.getText();
            const type: ts.Type = checker.getTypeOfSymbolAtLocation(prop, node);
            
            // CHILD METADATA BY ADDITIONAL EXPLORATION
            const child = explore
            (
                collection, 
                checker, 
                type,
            );
            if (child && node.questionToken)
                child.required = false;

            object.properties[key] = child;
        }
        return id;
    }

    function get_uid(schema: IMetadata | null): string
    {
        if (schema === null)
            return "null";

        return crypto.createHash("sha256")
            .update(JSON.stringify(to_primitive(schema)))
            .digest("base64");
    }

    function to_primitive(schema: IMetadata | null): any
    {
        if (schema === null)
            return null;
        return {
            atomics: Array.from(schema.atomics),
            arraies: [...schema.arraies].map(([key, value]) => [key, to_primitive(value)]),
            objects: Array.from(schema.objects),
            nullable: schema.nullable
        };
    }
}

const ATOMICS: Singleton<[ts.TypeFlags, ts.TypeFlags, string][]> = new Singleton(() => [
    [ts.TypeFlags.BooleanLike, ts.TypeFlags.BooleanLiteral, "Boolean"],
    [ts.TypeFlags.NumberLike, ts.TypeFlags.NumberLiteral, "Number"],
    [ts.TypeFlags.BigIntLike, ts.TypeFlags.BigIntLiteral, "BigInt"],
    [ts.TypeFlags.StringLike, ts.TypeFlags.StringLiteral, "String"]
]);