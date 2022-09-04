import ts from "typescript";

import { IdentifierFactory } from "./IdentifierFactory";

export namespace LiteralFactory {
    export function generate(input: any): ts.Expression {
        if (input === null) return ts.factory.createNull();
        else if (ts.isIdentifier(input)) return input;
        else if (input instanceof Array) return generate_array(input);
        else if (typeof input === "object") return generate_object(input);
        else if (typeof input === "string") return generate_string(input);
        else if (typeof input === "boolean") return generate_value(input);
        else if (typeof input === "number") return generate_value(input);
        else if (typeof input === "bigint") return generate_value(input);
        else throw new Error("Unknown type.");
    }

    function generate_object(obj: object): ts.ObjectLiteralExpression {
        const properties = Object.entries(obj)
            .filter((tuple) => tuple[1] !== undefined)
            .map(([key, value]) =>
                ts.factory.createPropertyAssignment(
                    IdentifierFactory.generate(key),
                    generate(value),
                ),
            );
        return ts.factory.createObjectLiteralExpression(properties, true);
    }

    function generate_array(array: any[]): ts.ArrayLiteralExpression {
        return ts.factory.createArrayLiteralExpression(
            array.map(generate),
            true,
        );
    }

    function generate_value(value: number | boolean | bigint): ts.Identifier {
        return ts.factory.createIdentifier(value.toString());
    }

    function generate_string(value: string): ts.StringLiteral {
        return ts.factory.createStringLiteral(value);
    }
}
