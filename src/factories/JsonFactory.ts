import ts from "typescript";
import { Singleton } from "tstl/thread/Singleton";

import { ISchema } from "../structures/ISchema";

export namespace JsonFactory
{
    export function application(app: ISchema.IApplication | null): ts.ArrayLiteralExpression
    {
        return ts.factory.createArrayLiteralExpression
        (
            [
                schema(app),
                external(app?.storage || null)
            ],
            true
        )
    }

    /* -----------------------------------------------------------
        STORAGE
    ----------------------------------------------------------- */
    export function external(storage: ISchema.IStorage | null): ts.ObjectLiteralExpression
    {
        const properties: ts.PropertyAssignment[] = storage ? Object
            .entries(storage)
            .map(([key, object]) => ts.factory.createPropertyAssignment
            (
                key,
                generate_object(object)
            )) : [];
        const external: ts.PropertyAssignment = ts.factory.createPropertyAssignment
        (
            "external",
            ts.factory.createObjectLiteralExpression(properties, true)
        );
        return ts.factory.createObjectLiteralExpression([ external ], true);
    }

    function generate_object(object: ISchema.IObject): ts.ObjectLiteralExpression
    {
        const properties: ts.PropertyAssignment[] = Object
            .entries(object.properties)
            .map(([key, value]) => ts.factory.createPropertyAssignment
            (
                key,
                schema(value)
            ));
        const members: ts.PropertyAssignment[] = [
            ts.factory.createPropertyAssignment("type", 
                ts.factory.createStringLiteral("object")
            ),
            ts.factory.createPropertyAssignment("properties", 
                ts.factory.createObjectLiteralExpression(properties, true)
            ),
            ts.factory.createPropertyAssignment("nullable",
                ts.factory.createIdentifier(object.nullable.toString())
            )
        ];
        return ts.factory.createObjectLiteralExpression(members, true)
    }

    /* -----------------------------------------------------------
        SCHEMA
    ----------------------------------------------------------- */
    export function schema(elem: ISchema | null): ts.ObjectLiteralExpression
    {
        if (elem === null)
            return empty.get();

        // GATHER UNION TYPES
        const unions: ts.ObjectLiteralExpression[] = [];
        for (const type of elem.atomics)
            unions.push(generate_atomic(type, elem.nullable));
        for (const address of elem.objects.values())
            unions.push(generate_pointer(address));
        for (const schema of elem.arraies.values())
            unions.push(generate_array(schema, elem.nullable));

        // NO MULTIPLE UNION TYPES
        if (unions.length === 0)
            return empty.get();
        else if (unions.length === 1)
            return unions[0]!;

        // MULTIPLE UNION TYPES
        const assignment: ts.PropertyAssignment = ts.factory.createPropertyAssignment
        (
            "anyOf",
            ts.factory.createArrayLiteralExpression(unions, true)
        );
        return ts.factory.createObjectLiteralExpression([ assignment ], true);
    }

    function generate_atomic
        (
            type: string, 
            nullable: boolean
        ): ts.ObjectLiteralExpression
    {
        const parameters: ts.PropertyAssignment[] = [
            ts.factory.createPropertyAssignment("type", 
                ts.factory.createStringLiteral(type)
            ),
            ts.factory.createPropertyAssignment("nullable", 
                ts.factory.createIdentifier(nullable.toString())
            )
        ];
        return ts.factory.createObjectLiteralExpression(parameters, true);
    }

    function generate_pointer(address: string): ts.ObjectLiteralExpression
    {
        const members: ts.PropertyAssignment[] = [
            ts.factory.createPropertyAssignment("$ref", 
                ts.factory.createStringLiteral(address)
            )
        ];
        return ts.factory.createObjectLiteralExpression(members, true);
    }

    function generate_array(elem: ISchema | null, nullable: boolean)
    {
        const members: ts.PropertyAssignment[] = [
            ts.factory.createPropertyAssignment("type",
                ts.factory.createStringLiteral("array")
            ),
            ts.factory.createPropertyAssignment("items", 
                schema(elem)
            ),
            ts.factory.createPropertyAssignment("nullable",
                ts.factory.createIdentifier(nullable.toString())
            )
        ];
        return ts.factory.createObjectLiteralExpression(members, true);
    }
}
const empty = new Singleton(() => ts.factory.createObjectLiteralExpression([], true));