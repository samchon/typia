import ts from "typescript";

import { IsProgrammer } from "../../programmers/IsProgrammer";
import { IProject } from "../IProject";

export namespace IsTransformer {
    export function transform(
        project: IProject,
        _modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        if (expression.arguments.length !== 1)
            throw new Error(ErrorMessages.NO_INPUT_VALUE);

        const type: ts.Type =
            expression.typeArguments && expression.typeArguments[0]
                ? project.checker.getTypeFromTypeNode(
                      expression.typeArguments[0],
                  )
                : project.checker.getTypeAtLocation(expression.arguments[0]!);
        if (type.isTypeParameter())
            throw new Error(ErrorMessages.GENERIC_ARGUMENT);

        return ts.factory.createCallExpression(
            IsProgrammer.generate(project)(type),
            undefined,
            [expression.arguments[0]!],
        );
    }
}

const enum ErrorMessages {
    NO_INPUT_VALUE = "Error on TSON.is(): no input value.",
    GENERIC_ARGUMENT = "Error on TSON.is(): non-specified generic argument.",
}
