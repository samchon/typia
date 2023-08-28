import ts from "typescript";

import { IProject } from "../IProject";
import { TransformerError } from "../TransformerError";

export namespace GenericTransformer {
    export const scalar =
        (method: string) =>
        (
            programmer: (
                project: IProject,
            ) => (
                modulo: ts.LeftHandSideExpression,
            ) => (type: ts.Type, name: string) => ts.ArrowFunction,
        ) =>
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (expression: ts.CallExpression) => {
            // CHECK PARAMETER
            if (expression.arguments.length !== 1)
                throw new TransformerError({
                    code: `typia.${method}`,
                    message: `no input value.`,
                });

            // GET TYPE INFO
            const [type, node, generic]: [ts.Type, ts.Node, boolean] =
                expression.typeArguments && expression.typeArguments[0]
                    ? [
                          project.checker.getTypeFromTypeNode(
                              expression.typeArguments[0],
                          ),
                          expression.typeArguments[0],
                          true,
                      ]
                    : [
                          project.checker.getTypeAtLocation(
                              expression.arguments[0]!,
                          ),
                          expression.arguments[0]!,
                          false,
                      ];
            if (type.isTypeParameter())
                throw new TransformerError({
                    code: `typia.${method}`,
                    message: `non-specified generic argument.`,
                });

            // DO TRANSFORM
            return ts.factory.createCallExpression(
                programmer(project)(modulo)(
                    type,
                    generic
                        ? node.getFullText().trim()
                        : name(project.checker)(type)(node),
                ),
                undefined,
                [expression.arguments[0]!],
            );
        };

    export const factory =
        (method: string) =>
        (
            programmer: (
                project: IProject,
            ) => (
                modulo: ts.LeftHandSideExpression,
            ) => (type: ts.Type, name: string) => ts.ArrowFunction,
        ) =>
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (expression: ts.CallExpression) => {
            // CHECK GENERIC ARGUMENT EXISTENCE
            if (!expression.typeArguments?.[0])
                throw new TransformerError({
                    code: `typia.${method}`,
                    message: `generic argument is not specified.`,
                });

            // GET TYPE INFO
            const node: ts.TypeNode = expression.typeArguments[0];
            const type: ts.Type = project.checker.getTypeFromTypeNode(node);

            if (type.isTypeParameter())
                throw new TransformerError({
                    code: `typia.${method}`,
                    message: `non-specified generic argument.`,
                });

            // DO TRANSFORM
            return programmer(project)(modulo)(type, node.getFullText().trim());
        };

    const name =
        (checker: ts.TypeChecker) =>
        (type: ts.Type) =>
        (node: ts.Node): string =>
            checker.typeToString(
                type,
                node,
                ts.TypeFormatFlags.NodeBuilderFlagsMask,
            );
}
