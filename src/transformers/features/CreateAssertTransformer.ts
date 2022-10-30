import ts from "typescript";

import { AssertProgrammerV3 } from "../../programmers/AssertProgrammer";

import { IProject } from "../IProject";

export namespace CreateAssertTransformer {
    export function transform(equals: boolean) {
        const SYMBOL = equals ? "createAssertEquals" : "createAssertType";
        const MESSAGES = {
            NOT_SPECIFIED: `Error on TSON.${SYMBOL}(): generic argument is not specified.`,
            GENERIC_ARGUMENT: `Error on TSON.${SYMBOL}(): non-specified generic argument.`,
        };

        return function (
            project: IProject,
            modulo: ts.LeftHandSideExpression,
            expression: ts.CallExpression,
        ): ts.Expression {
            // CHECK GENERIC ARGUMENT EXISTENCE
            if (!expression.typeArguments || !expression.typeArguments[0])
                throw new Error(MESSAGES.NOT_SPECIFIED);

            // GET TYPE INFO
            const type: ts.Type = project.checker.getTypeFromTypeNode(
                expression.typeArguments[0],
            );
            if (type.isTypeParameter())
                throw new Error(MESSAGES.GENERIC_ARGUMENT);

            // DO TRANSFORM
            return AssertProgrammerV3.generate(project, modulo, equals)(type);
        };
    }
}
