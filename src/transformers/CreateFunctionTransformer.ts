import ts from "typescript";
import { IProject } from "../structures/IProject";

export namespace CreateFunctionTransformer {
    export function transform(
        _project: IProject,
        expression: ts.CallExpression,
    ): ts.CallExpression {
        // GET PARAMETER
        const param: ts.Expression | undefined = expression.arguments[0];
        if (param === undefined)
            throw new Error("Error on TSON.create(): no input value.");

        // CONVERT TO JSON-STRING
        const json: string = to_json_string(param);

        // DO TRANSFORM
        return ts.factory.createCallExpression(
            ts.factory.createIdentifier("JSON.parse"),
            undefined,
            [ts.factory.createStringLiteral(json)],
        );
    }

    function to_json_string(param: ts.Expression): string {
        try {
            const text: string = param.getFullText();
            const obj: any = new Function(`return ${text};`)();

            return JSON.stringify(obj);
        } catch (exp) {
            throw new Error(
                "Error on TSON.create(): input value must be constant.",
            );
        }
    }
}
