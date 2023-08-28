import ts from "typescript";

import { RandomProgrammer } from "../../programmers/RandomProgrammer";

import { IProject } from "../IProject";
import { TransformerError } from "../TransformerError";

export namespace CreateRandomTransformer {
    export const transform =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (expression: ts.CallExpression): ts.Expression => {
            // CHECK GENERIC ARGUMENT EXISTENCE
            if (!expression.typeArguments?.[0])
                throw new TransformerError({
                    code: "typia.createRandom",
                    message: "generic argument is not specified.",
                });

            // GET TYPE INFO
            const node: ts.TypeNode = expression.typeArguments[0];
            const type: ts.Type = project.checker.getTypeFromTypeNode(node);

            if (type.isTypeParameter())
                throw new TransformerError({
                    code: "typia.createRandom",
                    message: "non-specified generic argument.",
                });

            // DO TRANSFORM
            return RandomProgrammer.write({
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
