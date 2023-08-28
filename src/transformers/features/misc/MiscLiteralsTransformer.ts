import ts from "typescript";

import { MiscLiteralsProgrammer } from "../../../programmers/misc/MiscLiteralsProgrammer";

import { IProject } from "../../IProject";
import { TransformerError } from "../../TransformerError";

export namespace MiscLiteralsTransformer {
    export const transform =
        (project: IProject) =>
        (expression: ts.CallExpression): ts.Expression => {
            // CHECK GENERIC ARGUMENT EXISTENCE
            if (!expression.typeArguments?.[0])
                throw new TransformerError({
                    code: "typia.misc.literals",
                    message: "generic argument is not specified.",
                });

            // GET TYPE INFO
            const node: ts.TypeNode = expression.typeArguments[0];
            const type: ts.Type = project.checker.getTypeFromTypeNode(node);

            if (type.isTypeParameter())
                throw new TransformerError({
                    code: "typia.misc.literals",
                    message: "non-specified generic argument.",
                });

            // DO TRANSFORM
            return MiscLiteralsProgrammer.write(project)(type);
        };
}
