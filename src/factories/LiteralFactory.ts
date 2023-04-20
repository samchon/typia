import ts from "typescript";

import { IdentifierFactory } from "./IdentifierFactory";

export namespace LiteralFactory {
    export const generate = (input: any): ts.Expression => {
        if (input === null) return ts.factory.createNull();
        else if (ts.isIdentifier(input)) return input;
        else if (input instanceof Array) return generate_array(input);
        else if (typeof input === "object") return generate_object(input);
        else if (typeof input === "string") return generate_string(input);
        else if (typeof input === "boolean") return generate_value(input);
        else if (typeof input === "number") return generate_value(input);
        else if (typeof input === "bigint") return generate_value(input);
        else throw new Error("Unknown type.");
    };

    const generate_object = (obj: object): ts.ObjectLiteralExpression =>
        ts.factory.createObjectLiteralExpression(
            Object.entries(obj)
                .filter((tuple) => tuple[1] !== undefined)
                .map(([key, value]) =>
                    ts.factory.createPropertyAssignment(
                        IdentifierFactory.identifier(key),
                        generate(value),
                    ),
                ),
            true,
        );

    const generate_array = (array: any[]): ts.ArrayLiteralExpression =>
        ts.factory.createArrayLiteralExpression(array.map(generate), true);

    const generate_value = (value: number | boolean | bigint): ts.Identifier =>
        ts.factory.createIdentifier(value.toString());

    const generate_string = (value: string): ts.StringLiteral =>
        ts.factory.createStringLiteral(value);
}
