import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { AssertProgrammer } from "../../programmers/AssertProgrammer";
import { StringifyProgrammer } from "../../programmers/StringifyProgrammer";

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
        return ts.factory.createArrowFunction(
            undefined,
            undefined,
            [IdentifierFactory.parameter("input")],
            undefined,
            undefined,
            ts.factory.createBlock([
                StatementFactory.constant(
                    "assertType",
                    AssertProgrammer.generate(project, modulo)(type),
                ),
                StatementFactory.constant(
                    "stringify",
                    StringifyProgrammer.generate(project, modulo)(type),
                ),
                ts.factory.createReturnStatement(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("stringify"),
                        undefined,
                        [
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("assertType"),
                                undefined,
                                [ts.factory.createIdentifier("input")],
                            ),
                        ],
                    ),
                ),
            ]),
        );
    }
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on TSON.assertStringify(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on TSON.assertStringify(): non-specified generic argument.",
}
