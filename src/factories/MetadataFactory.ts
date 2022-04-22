import crypto from "crypto";
import ts from "typescript";
import { HashMap } from "tstl/container/HashMap";
import { Pair } from "tstl/utility/Pair";
import { Singleton } from "tstl/thread/Singleton";

import { IMetadata } from "../structures/IMetadata";
import { TypeFactory } from "./TypeFactry";
import { IPointer } from "tstl/functional/IPointer";

export namespace MetadataFactory
{
    export function generate
        (
            checker: ts.TypeChecker, 
            type: ts.Type | null
        ): IMetadata.IApplication | null
    {
        // CONSTRUCT SCHEMA WITH OBJECTS
        const dict: HashMap<Pair<ts.Type, boolean>, [string, IMetadata.IObject]> = new HashMap();
        const counter: IPointer<number> = { value: 0 };
        const entity: IMetadata | null = explore(checker, dict, counter, type);

        // SERIALIZE STORAGE
        const storage: IMetadata.IStorage = {};
        for (const it of dict)
            storage[it.second[0]] = it.second[1];

        // RETURNS
        return entity 
            ? { ...entity, storage } 
            : null;
    }

    function explore
        (
            checker: ts.TypeChecker, 
            dict: HashMap<Pair<ts.Type, boolean>, [string, IMetadata.IObject]>,
            counter: IPointer<number>,
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
        if (iterate(checker, dict, counter, schema, type) === false)
            return null;
        return schema;
    }

    function iterate
        (
            checker: ts.TypeChecker, 
            dict: HashMap<Pair<ts.Type, boolean>, [string, IMetadata.IObject]>, 
            counter: IPointer<number>,
            schema: IMetadata, 
            type: ts.Type,
        ): boolean
    {
        type = TypeFactory.escape(checker, type);
        if (type.isUnion())
            return type.types.every(t => iterate(checker, dict, counter, schema, t));

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
        
        // UNKNOWN OR NULL
        if (filter(ts.TypeFlags.Unknown) || filter(ts.TypeFlags.Never) || filter(ts.TypeFlags.Any))
            return false;
        else if (filter(ts.TypeFlags.Null))
            return schema.nullable = true;
        else if (filter(ts.TypeFlags.Undefined))
            return !(schema.required = false);

        // ATOMIC VALUE TYPES
        for (const [flag, literal, className] of ATOMICS.get())
            if (check(flag, literal, className) === true)
                return true;

        // WHEN ARRAY
        if (ts.isArrayTypeNode(node))
        {
            const elemType: ts.Type | null = checker.getTypeArguments(type as ts.TypeReference)[0] || null;
            const elemSchema: IMetadata | null = explore(checker, dict, counter, elemType);
            
            const key: string = get_uid(elemSchema);
            schema.arraies.set(key, elemSchema);
        }

        // WHEN TUPLE
        else if (ts.isTupleTypeNode(node))
        {
            if (node.elements.length === 0)
                return false;

            const elemSchema: IMetadata | null = explore
            (
                checker, 
                dict, 
                counter,
                checker.getTypeFromTypeNode(node.elements[0]!)
            );
            if (elemSchema === null)
                return false;
            
            for (const elem of node.elements.slice(1))
                if (iterate(checker, dict, counter, elemSchema, checker.getTypeFromTypeNode(elem)) === false)
                    return false;
        }

        // WHEN OBJECT, MAYBE
        else if (type.isClassOrInterface() || ts.isTypeLiteralNode(node) || type.isIntersection())
        {
            if (type.isIntersection())
            {
                const fakeDict: HashMap<Pair<ts.Type, boolean>, [string, IMetadata.IObject]> = new HashMap();
                const fakeSchema: IMetadata = {
                    atomics: new Set(),
                    arraies: new Map(),
                    objects: new Set(),
                    nullable: false,
                    required: true,
                };
                const fakeCounter: IPointer<number> = { value: 0 };

                if (type.types.every(t => iterate(checker, fakeDict, fakeCounter, fakeSchema, t)) === false)
                    return false;
                else if (fakeSchema.atomics.size || fakeSchema.arraies.size || !fakeSchema.objects.size)
                    return false;
            }

            const key: string = emplace(checker, dict, counter, type, schema.nullable);
            schema.objects.add(`external#/${key}`);
        }
        return true;
    }

    function emplace
        (
            checker: ts.TypeChecker,
            dict: HashMap<Pair<ts.Type, boolean>, [string, IMetadata.IObject]>,
            counter: IPointer<number>,
            type: ts.Type,
            nullable: boolean
        ): string
    {
        // CHECK MEMORY
        const key: Pair<ts.Type, boolean> = new Pair(type, nullable);
        const it: HashMap.Iterator<Pair<ts.Type, boolean>, [string, IMetadata.IObject]> = dict.find(key);
        if (it.equals(dict.end()) === false)
            return it.second[0];

        // PRE-ENROLLMENT FOR THE RECURSIVE STRUCTURE
        const id: string = `o${counter.value++}`;
        const object: IMetadata.IObject = {
            properties: {},
            nullable
        };
        dict.set(key, [id, object]);
        
        // PREPARE ASSETS
        const isClass: boolean = type.isClass();
        const pred: (node: ts.Declaration) => boolean = isClass
            ? node => (ts.isParameter(node) || ts.isPropertyDeclaration(node))
            : node => (ts.isPropertySignature(node) || ts.isTypeLiteralNode(node));

        for (const prop of type.getProperties())
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
                const kind = node.getChildren()[0]?.getChildren()[0]?.kind;
                if (kind === ts.SyntaxKind.PrivateKeyword || kind === ts.SyntaxKind.ProtectedKeyword)
                    continue;
            }

            // DETERMINE PROPERTY TYPE BY ADDITIONAL EXPLORATION
            const key: string = node.name.getText();
            const type: ts.Type | null = node.type 
                ? checker.getTypeFromTypeNode(node.type) 
                : null;

            const child = type ? explore(checker, dict, counter, type) : null;
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