import ts from "typescript";

import { ValidateParseProgrammer } from "../../../programmers/ValidateParseProgrammer";

import { IProject } from "../../IProject";

export namespace CreateValidateParseTransformer {
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
        return ValidateParseProgrammer.generate(project, modulo)(type);
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on TSON.validateParse(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on TSON.validateParse(): non-specified generic argument.",
}
