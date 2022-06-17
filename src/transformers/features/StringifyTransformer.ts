import ts from "typescript";
import { StringifyFactory } from "../../factories/features/StringifyFactory";
import { IModuleImport } from "../../structures/IModuleImport";
import { IProject } from "../../structures/IProject";

export namespace StringifyTransformer {
    export function transform(
        project: IProject,
        expression: ts.CallExpression,
        modulo: IModuleImport,
    ): ts.Expression {
        if (expression.arguments.length !== 1)
            throw new Error(ErrorMessages.NO_INPUT_VALUE);

        modulo.used ||= true;

        const type: ts.Type =
            expression.typeArguments && expression.typeArguments[0]
                ? project.checker.getTypeFromTypeNode(
                      expression.typeArguments[0],
                  )
                : project.checker.getTypeAtLocation(expression.arguments[0]!);

        return ts.factory.createCallExpression(
            StringifyFactory.generate(modulo)(project, type),
            undefined,
            [expression.arguments[0]!],
        );
    }
}

const enum ErrorMessages {
    NO_INPUT_VALUE = "Error on TSON.strigify(): no input value.",
}
