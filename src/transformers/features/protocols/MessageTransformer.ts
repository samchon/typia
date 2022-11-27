import ts from "typescript";

import { MessageProgrammer } from "../../../programmers/MessageProgrammer";

import { IProject } from "../../IProject";

export namespace MessageTransformer {
    export function transform(
        project: IProject,
        _modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!expression.typeArguments || !expression.typeArguments[0])
            throw new Error(ErrorMessages.NOT_SPECIFIED);

        // GET TYPE INFO
        const type: ts.Type = project.checker.getTypeFromTypeNode(
            expression.typeArguments[0],
        );
        if (type.isTypeParameter())
            throw new Error(ErrorMessages.GENERIC_ARGUMENT);

        // DO TRANSFORM
        return MessageProgrammer.generate(project)(type);
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on TSON.message(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on TSON.message(): non-specified generic argument.",
}
