import ts from "typescript";

import { IProject } from "../../IProject";

export namespace CreateInstanceTransformer {
    export function transform(
        _project: IProject,
        _modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.CallExpression {
        // GET PARAMETER
        const param: ts.Expression | undefined = expression.arguments[0];
        if (param === undefined) throw new Error(ErrorMessages.NO_INPUT_VALUE);

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
            throw new Error(ErrorMessages.NO_CONSTANT_VALUE);
        }
    }
}

const enum ErrorMessages {
    NO_INPUT_VALUE = "Error on typia.createObject(): no input value.",
    NO_CONSTANT_VALUE = "Error on typia.createObject(): input value must be constant.",
}
