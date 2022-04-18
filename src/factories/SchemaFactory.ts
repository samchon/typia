import ts from "typescript";
import { Singleton } from "tstl/thread/Singleton";

import { ISchema } from "../structures/IMetadata";

export namespace SchemaFactory
{
    export function generate(checker: ts.TypeChecker, type: ts.Type): ISchema.IApplication | null
    {
        // CONSTRUCT SCHEMA WITH OBJECTS
        const dict: Map<ts.InterfaceType, [string, ISchema.IObject]> = new Map();
        const schema: ISchema | null = explore(checker, dict, type);

        // SERIALIZE STORAGE
        const storage: ISchema.IStorage = {};
        for (const [key, value] of dict.values())
            storage[key] = value;

        // RETURNS
        return schema 
            ? { ...schema, storage } 
            : null;
    }

    function explore
        (
            checker: ts.TypeChecker, 
            dict: Map<ts.InterfaceType, [string, ISchema.IObject]>,
            type: ts.Type,
        ): ISchema | null
    {
        const schema: ISchema = {
            atomics: new Set(),
            arraies: new Map(),
            objects: new Set(),
            nullable: false
        };
        if (iterate(checker, dict, schema, type) === false)
            return null;
        return schema;
    }

    function iterate
        (
            checker: ts.TypeChecker, 
            dict: Map<ts.InterfaceType, [string, ISchema.IObject]>, 
            schema: ISchema, 
            type: ts.Type
        ): boolean
    {
        if (type.isUnion())
            return type.types.every(t => iterate(checker, dict, schema, t));

        const filter = (flag: ts.TypeFlags) => (type.flags & flag) !== 0;
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

        // ATOMIC VALUE TYPES
        for (const [flag, literal, className] of ATOMICS.get())
            if (check(flag, literal, className) === true)
                return true;

        // WHEN OBJECT
        if (type.isClassOrInterface())
        {
            const key: string = emplace(checker, dict, type);
            schema.objects.add(`external#/${key}`);
        }
        return true;
    }

    function emplace
        (
            checker: ts.TypeChecker,
            dict: Map<ts.InterfaceType, [string, ISchema.IObject]>,
            type: ts.InterfaceType,
        ): string
    {
        const oldbie = dict.get(type);
        if (oldbie !== undefined)
            oldbie[0];

        const key: string = `o${++sequence}`;
        const object: ISchema.IObject = {};
        
        for (const prop of type.getProperties())
        {
            const node = prop.valueDeclaration;
            if (!node || !ts.isPropertySignature(node))
                continue;

            const key = node.name.getText();
            const type = node.type ? checker.getTypeFromTypeNode(node.type) : null;
            object[key] = type ? explore(checker, dict, type) : null;
        }
        
        dict.set(type, [key, object]);
        return key;
    }
}

const ATOMICS: Singleton<[ts.TypeFlags, ts.TypeFlags, string][]> = new Singleton(() => [
    [ts.TypeFlags.BooleanLike, ts.TypeFlags.BooleanLike, "Boolean"],
    [ts.TypeFlags.NumberLike, ts.TypeFlags.NumberLiteral, "Number"],
    [ts.TypeFlags.BigIntLike, ts.TypeFlags.BigIntLiteral, "BigInt"],
    [ts.TypeFlags.StringLike, ts.TypeFlags.StringLiteral, "String"]
]);

let sequence: number = 0;