import ts from "typescript";

import { AssertParseProgrammer } from "../../../programmers/AssertParseProgrammer";

import { IProject } from "../../IProject";

export namespace CreateAssertParseTransformer {
    export function transform(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        // CHECK GENERIC ARGUMENT EXASSERTTENCE
        if (!expression.typeArguments?.[0])
            throw new Error(ErrorMessages.NOT_SPECIFIED);

        // GET TYPE INFO
        const type: ts.Type = project.checker.getTypeFromTypeNode(
            expression.typeArguments[0],
        );
        if (type.isTypeParameter())
            throw new Error(ErrorMessages.GENERIC_ARGUMENT);

        // DO TRANSFORM
        return AssertParseProgrammer.generate(project, modulo)(type);
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on typia.assertParse(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on typia.assertParse(): non-specified generic argument.",
}
