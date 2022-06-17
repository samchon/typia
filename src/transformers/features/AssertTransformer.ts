import ts from "typescript";
import { AssertFactory } from "../../factories/features/AssertFactory";
import { IModuleImport } from "../../structures/IModuleImport";
import { IProject } from "../../structures/IProject";

export namespace AssertTransformer {
    export function transform(
        project: IProject,
        expression: ts.CallExpression,
        imp: IModuleImport,
    ): ts.Expression {
        if (expression.arguments.length !== 1)
            throw new Error(ErrorMessages.NO_INPUT_VALUE);

        // FOR THE IMPORT STATEMENT CONSTRUCTION
        imp.used ||= true;

        // GET TYPE INFO
        const type: ts.Type =
            expression.typeArguments && expression.typeArguments[0]
                ? project.checker.getTypeFromTypeNode(
                      expression.typeArguments[0],
                  )
                : project.checker.getTypeAtLocation(expression.arguments[0]!);

        // DO TRANSFORM
        return ts.factory.createCallExpression(
            AssertFactory.generate(project, type, imp),
            undefined,
            [expression.arguments[0]!],
        );
    }
}

const enum ErrorMessages {
    NO_INPUT_VALUE = "Error on TSON.assert(): no input value.",
}
