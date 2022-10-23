import ts from "typescript";

import { StringifyProgrammer } from "../../programmers/StringifyProgrammer";

import { IProject } from "../IProject";

export namespace CreateStringifyTransformer {
    export function transform(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
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

        return StringifyProgrammer.generate(project, modulo)(type);
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on TSON.strigify(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on TSON.stringify(): non-specified generic argument.",
}
