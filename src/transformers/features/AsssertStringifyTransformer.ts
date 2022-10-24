import ts from "typescript";

import { AssertProgrammer } from "../../programmers/AssertProgrammer";
import { StringifyProgrammer } from "../../programmers/StringifyProgrammer";

import { IProject } from "../IProject";

export namespace AssertStringifyTransformer {
    export function transform(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        if (expression.arguments.length !== 1)
            throw new Error(ErrorMessages.NO_INPUT_VALUE);

        // GET TYPE INFO
        const type: ts.Type =
            expression.typeArguments && expression.typeArguments[0]
                ? project.checker.getTypeFromTypeNode(
                      expression.typeArguments[0],
                  )
                : project.checker.getTypeAtLocation(expression.arguments[0]!);
        if (type.isTypeParameter())
            throw new Error(ErrorMessages.GENERIC_ARGUMENT);

        // DO TRANSFORM
        return ts.factory.createCallExpression(
            StringifyProgrammer.generate(project, modulo)(type),
            undefined,
            [
                ts.factory.createCallExpression(
                    AssertProgrammer.generate(project, modulo, false)(type),
                    undefined,
                    [expression.arguments[0]!],
                ),
            ],
        );
    }
}

const enum ErrorMessages {
    NO_INPUT_VALUE = "Error on TSON.assertStringify(): no input value.",
    GENERIC_ARGUMENT = "Error on TSON.assertStringify(): non-specified generic argument.",
}
