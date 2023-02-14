import ts from "typescript";

import { AssertPruneProgrammer } from "../../../programmers/AssertPruneProgrammer";

import { IProject } from "../../IProject";

export namespace CreateAssertPruneTransformer {
    export function transform(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!expression.typeArguments?.[0])
            throw new Error(ErrorMessages.NOT_SPECIFIED);

        // GET TYPE INFO
        const type: ts.Type = project.checker.getTypeFromTypeNode(
            expression.typeArguments[0],
        );
        if (type.isTypeParameter())
            throw new Error(ErrorMessages.GENERIC_ARGUMENT);

        // DO TRANSFORM
        return AssertPruneProgrammer.generate(project, modulo)(type);
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on typia.assertPrune(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on typia.assertPrune(): non-specified generic argument.",
}
