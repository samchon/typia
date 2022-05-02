import ts from "typescript";

export namespace ExpressionFactory
{
    export function generate(input: any)
    {
        if (input instanceof Array)
            return generate_array(input);
        else if (typeof input === "object")
            return generate_object(input);
        else if (typeof input === "boolean")
            return generate_boolean(input);
        else if (typeof input === "string")
            return generate_string(input);
        else
            throw new Error("Unknown type.");
    }
    
    function generate_object(obj: object): ts.ObjectLiteralExpression
    {
        const properties = Object
            .entries(obj)
            .map(([key, value]) => ts.factory.createPropertyAssignment
            (
                generate_string(key),
                generate(value)
            ));
        return ts.factory.createObjectLiteralExpression(properties, true);
    }

    function generate_array(array: any[]): ts.ArrayLiteralExpression
    {
        return ts.factory.createArrayLiteralExpression
        (
            array.map(generate),
            true
        );
    }

    function generate_boolean(value: boolean): ts.Identifier
    {
        return ts.factory.createIdentifier(value.toString());
    }

    function generate_string(value: string): ts.StringLiteral
    {
        return ts.factory.createStringLiteral(value);
    }
}