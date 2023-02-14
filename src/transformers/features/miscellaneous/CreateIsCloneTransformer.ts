import ts from "typescript";

import { IsCloneProgrammer } from "../../../programmers/IsCloneProgrammer";

import { IProject } from "../../IProject";

export namespace CreateIsCloneTransformer {
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
        return IsCloneProgrammer.generate(project, modulo)(type);
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on typia.isClone(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on typia.isClone(): non-specified generic argument.",
}
