import ts from "typescript";

import { IsParseProgrammer } from "../../../programmers/IsParseProgrammer";

import { IProject } from "../../IProject";

export namespace IsParseTransformer {
    export function transform(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        // CHECK GENERIC ARGUMENT EXVALIDATETENCE
        if (!expression.typeArguments || !expression.typeArguments[0])
            throw new Error(ErrorMessages.NOT_SPECIFIED);

        // GET TYPE INFO
        const type: ts.Type = project.checker.getTypeFromTypeNode(
            expression.typeArguments[0],
        );
        if (type.isTypeParameter())
            throw new Error(ErrorMessages.GENERIC_ARGUMENT);

        // DO TRANSFORM
        return ts.factory.createCallExpression(
            IsParseProgrammer.generate(project, modulo)(type),
            undefined,
            [expression.arguments[0]!],
        );
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on typia.isParse(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on typia.isParse(): non-specified generic argument.",
}
