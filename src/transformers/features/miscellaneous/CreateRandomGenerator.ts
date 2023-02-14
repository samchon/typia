import ts from "typescript";

import { RandomProgrammer } from "../../../programmers/RandomProgrammer";

import { IProject } from "../../IProject";

export namespace CreateRandomTransformer {
    export function transform(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        if (!expression.typeArguments?.[0])
            throw new Error(ErrorMessages.NOT_SPECIFIED);

        const type: ts.Type | undefined = project.checker.getTypeFromTypeNode(
            expression.typeArguments[0],
        );
        if (type.isTypeParameter())
            throw new Error(ErrorMessages.NO_GENERIC_ARGUMENT);

        return RandomProgrammer.generate(
            {
                ...project,
                options: {
                    ...project.options,
                    functional: false,
                    numeric: false,
                },
            },
            modulo,
        )(type);
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on typia.createRandom(): generic argument is not specified.",
    NO_GENERIC_ARGUMENT = "Error on typia.createRandom(): non-specified generic argument.",
}
