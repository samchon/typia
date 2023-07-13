import ts from "typescript";

import { MiscLiteralsProgrammer } from "../../../programmers/misc/MiscLiteralsProgrammer";

import { IProject } from "../../IProject";

export namespace LiteralsTransformer {
    export const transform =
        (project: IProject) =>
        (expression: ts.CallExpression): ts.Expression => {
            // CHECK GENERIC ARGUMENT EXISTENCE
            if (!expression.typeArguments?.[0]) throw new Error(NOT_SPECIFIED);

            // GET TYPE INFO
            const node: ts.TypeNode = expression.typeArguments[0];
            const type: ts.Type = project.checker.getTypeFromTypeNode(node);

            if (type.isTypeParameter()) throw new Error(NO_GENERIC_ARGUMENT);

            // DO TRANSFORM
            return MiscLiteralsProgrammer.write(project)(type);
        };
}

const NOT_SPECIFIED =
    "Error on typia.literals(): generic argument is not specified.";
const NO_GENERIC_ARGUMENT =
    "Error on typia.literals(): non-specified generic argument.";
