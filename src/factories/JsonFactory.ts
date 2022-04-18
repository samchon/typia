import ts from "typescript";
import { Singleton } from "tstl/thread/Singleton";

import { ISchema } from "../structures/IMetadata";

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
            .entries(object)
            .map(([key, value]) => ts.factory.createPropertyAssignment
            (
                key,
                schema(value)
            ));
        const assignment: ts.PropertyAssignment = ts.factory.createPropertyAssignment
        (
            "properties",
            ts.factory.createObjectLiteralExpression(properties, true)
        );
        return ts.factory.createObjectLiteralExpression([ assignment ], true)
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
            unions.push(generate_pointer(address, elem.nullable));

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
        const properties: ts.PropertyAssignment[] = [
            ts.factory.createPropertyAssignment("type", 
                ts.factory.createStringLiteral(type)
            ),
            ts.factory.createPropertyAssignment("nullable", 
                ts.factory.createIdentifier(nullable.toString())
            )
        ];
        return ts.factory.createObjectLiteralExpression(properties, true);
    }

    function generate_pointer(address: string, nullable: boolean): ts.ObjectLiteralExpression
    {
        const properties: ts.PropertyAssignment[] = [
            ts.factory.createPropertyAssignment("$ref", 
                ts.factory.createStringLiteral(address)
            ),
            ts.factory.createPropertyAssignment("nullable", 
                ts.factory.createIdentifier(nullable.toString())
            )
        ];
        return ts.factory.createObjectLiteralExpression(properties, true);
    }
}
const empty = new Singleton(() => ts.factory.createObjectLiteralExpression([], true));