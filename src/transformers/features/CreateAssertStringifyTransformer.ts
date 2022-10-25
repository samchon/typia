import ts from "typescript";

import { AssertStringifyProgrammer } from "../../programmers/AssertStringifyProgrammer";

import { IProject } from "../IProject";

export namespace CreateAssertStringifyTransformer {
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

        // DO TRANSFORM
        return AssertStringifyProgrammer.generate(project, modulo)(type);
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on TSON.assertStringify(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on TSON.assertStringify(): non-specified generic argument.",
}
