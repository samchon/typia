import ts from "typescript";

import { PruneProgrammer } from "../../../programmers/PruneProgrammer";

import { IProject } from "../../IProject";

export namespace PruneTransformer {
    export function transform(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
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
            PruneProgrammer.generate(
                {
                    ...project,
                    options: {
                        ...project.options,
                        functional: false,
                        numeric: false,
                    },
                },
                modulo,
            )(type),
            undefined,
            [expression.arguments[0]!],
        );
    }
}

const enum ErrorMessages {
    NO_INPUT_VALUE = "Error on typia.prune(): no input value.",
    GENERIC_ARGUMENT = "Error on typia.prune(): non-specified generic argument.",
}
