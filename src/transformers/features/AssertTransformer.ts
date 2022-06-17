import ts from "typescript";
import { AssertFactory } from "../../factories/features/AssertFactory";
import { IProject } from "../../structures/IProject";

export namespace AssertTransformer {
    export function transform(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        if (expression.arguments.length !== 1)
            throw new Error(ErrorMessages.NO_INPUT_VALUE);

        // GET TYPE INFO
        const type: ts.Type =
            expression.typeArguments && expression.typeArguments[0]
                ? project.checker.getTypeFromTypeNode(
                      expression.typeArguments[0],
                  )
                : project.checker.getTypeAtLocation(expression.arguments[0]!);

        // DO TRANSFORM
        return ts.factory.createCallExpression(
            AssertFactory.generate(project, modulo, type),
            undefined,
            [expression.arguments[0]!],
        );
    }
}

const enum ErrorMessages {
    NO_INPUT_VALUE = "Error on TSON.assert(): no input value.",
}
