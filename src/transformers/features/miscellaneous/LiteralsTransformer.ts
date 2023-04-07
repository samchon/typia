import ts from "typescript";

import { LiteralsProgrammer } from "../../../programmers/LiteralsProgrammer";

import { IProject } from "../../IProject";

export namespace LiteralsTransformer {
    export function transform(
        project: IProject,
        _modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!expression.typeArguments?.[0]) throw new Error(NOT_SPECIFIED);

        // GET TYPE INFO
        const node: ts.TypeNode = expression.typeArguments[0];
        const type: ts.Type = project.checker.getTypeFromTypeNode(node);

        if (type.isTypeParameter()) throw new Error(NO_GENERIC_ARGUMENT);

        // DO TRANSFORM
        return LiteralsProgrammer.generate(project)(type);
    }
}

const NOT_SPECIFIED =
    "Error on typia.literals(): generic argument is not specified.";
const NO_GENERIC_ARGUMENT =
    "Error on typia.literals(): non-specified generic argument.";
