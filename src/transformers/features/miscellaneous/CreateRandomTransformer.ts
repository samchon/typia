import ts from "typescript";

import { RandomProgrammer } from "../../../programmers/RandomProgrammer";

import { IProject } from "../../IProject";

export namespace CreateRandomTransformer {
    export const transform =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (expression: ts.CallExpression): ts.Expression => {
            // CHECK GENERIC ARGUMENT EXISTENCE
            if (!expression.typeArguments?.[0]) throw new Error(NOT_SPECIFIED);

            // GET TYPE INFO
            const node: ts.TypeNode = expression.typeArguments[0];
            const type: ts.Type = project.checker.getTypeFromTypeNode(node);

            if (type.isTypeParameter()) throw new Error(NO_GENERIC_ARGUMENT);

            // DO TRANSFORM
            return RandomProgrammer.generate({
                ...project,
                options: {
                    ...project.options,
                    functional: false,
                    numeric: false,
                },
            })(modulo)(expression.arguments?.[0])(
                type,
                node.getFullText().trim(),
            );
        };
}

const NOT_SPECIFIED =
    "Error on typia.createRandom(): generic argument is not specified.";
const NO_GENERIC_ARGUMENT =
    "Error on typia.createRandom(): non-specified generic argument.";
