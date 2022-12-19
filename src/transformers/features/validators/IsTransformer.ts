import ts from "typescript";

import { IsProgrammer } from "../../../programmers/IsProgrammer";

import { IProject } from "../../IProject";

export namespace IsTransformer {
    export function transform(equals: boolean) {
        const SYMBOL = equals ? "equals" : "is";
        const MESSAGES = {
            NO_INPUT_VALUE: `Error on typia.${SYMBOL}(): no input value.`,
            GENERIC_ARGUMENT: `Error on typia.${SYMBOL}(): non-specified generic argument.`,
        };

        return function (
            project: IProject,
            modulo: ts.LeftHandSideExpression,
            expression: ts.CallExpression,
        ): ts.Expression {
            if (expression.arguments.length !== 1)
                throw new Error(MESSAGES.NO_INPUT_VALUE);

            // GET TYPE INFO
            const type: ts.Type =
                expression.typeArguments && expression.typeArguments[0]
                    ? project.checker.getTypeFromTypeNode(
                          expression.typeArguments[0],
                      )
                    : project.checker.getTypeAtLocation(
                          expression.arguments[0]!,
                      );
            if (type.isTypeParameter())
                throw new Error(MESSAGES.GENERIC_ARGUMENT);

            // DO TRANSFORM
            return ts.factory.createCallExpression(
                IsProgrammer.generate(project, modulo, equals)(type),
                undefined,
                [expression.arguments[0]!],
            );
        };
    }
}
