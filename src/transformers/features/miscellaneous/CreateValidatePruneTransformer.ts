import ts from "typescript";

import { ValidatePruneProgrammer } from "../../../programmers/ValidatePruneProgrammer";

import { IProject } from "../../IProject";

export namespace CreateValidatePruneTransformer {
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
        return ValidatePruneProgrammer.generate(project, modulo)(type);
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on typia.validatePrune(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on typia.validatePrune(): non-specified generic argument.",
}
