import ts from "typescript";

import { IProject } from "../IProject";
import { TransformerError } from "../TransformerError";

function findTypeNodeInIdentifier(arg: ts.Identifier) {
    let flowNode = arg.flowNode;
    while (true) {
        if (flowNode) {
            const { antecedent, node } = flowNode;
            if (node && "type" in node && node.type) {
                return node.type;
            } else if (antecedent && !Array.isArray(antecedent)) {
                flowNode = antecedent;
            }
        }
    }
}

function findTypeNode(expr: ts.Expression) {
    if (expr.kind === ts.SyntaxKind.Identifier) {
        return findTypeNodeInIdentifier(expr as ts.Identifier);
    } else if (expr.kind === ts.SyntaxKind.AsExpression) {
        return (expr as ts.AsExpression).type;
    }
    return undefined;
}

export namespace GenericTransformer {
    export const scalar =
        (method: string) =>
        (
            programmer: (
                project: IProject,
            ) => (
                modulo: ts.LeftHandSideExpression,
            ) => (type: ts.Type, name: string) => ts.Expression | ts.ArrowFunction,
        ) =>
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (expression: ts.CallExpression) => {
            // CHECK PARAMETER
            if (expression.arguments.length === 0) {
                throw new TransformerError({
                    code: `typia.${method}`,
                    message: `no input value.`,
                });
            }

            // GET TYPE INFO
            const typeArgument = expression.typeArguments?.[0];
            const [type, node, generic]: [ts.Type, ts.Node, boolean] = typeArgument
                ? [project.checker.getTypeFromTypeNode(typeArgument), typeArgument, true]
                : [project.checker.getTypeAtLocation(expression.arguments[0]!), expression.arguments[0]!, false];
            if (type.isTypeParameter()) {
                throw new TransformerError({
                    code: `typia.${method}`,
                    message: `non-specified generic argument.`,
                });
            }

            if (method === "misc.prune" && generic) {
                const arg = expression.arguments[0];
                if (arg) {
                    const typeNode = findTypeNode(arg);
                    if (typeNode) {
                        const inputType = project.checker.getTypeFromTypeNode(typeNode);
                        if (inputType) {
                            const isAssignable = project.checker.isTypeAssignableTo(type, inputType);
                            if (!isAssignable) {
                                console.log("!isAssignable");
                                // const diagnostic = ts.createDiagnosticForNode(arg, {
                                //     category: ts.DiagnosticCategory.Warning,
                                //     code: "todo code" as any,
                                //     key: "todo key",
                                //     message: "todo message",
                                // });
                                // project.extras.addDiagnostic(diagnostic);
                            }
                        }
                    }
                }
            }

            // DO TRANSFORM
            return ts.factory.createCallExpression(
                programmer(project)(modulo)(
                    type,
                    generic ? node.getFullText().trim() : name(project.checker)(type)(node),
                ),
                undefined,
                expression.arguments,
            );
        };

    export const factory =
        (method: string) =>
        (
            programmer: (
                project: IProject,
            ) => (
                modulo: ts.LeftHandSideExpression,
            ) => (type: ts.Type, name: string, init?: ts.Expression) => ts.Expression | ts.ArrowFunction,
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

            if (type.isTypeParameter()) {
                throw new TransformerError({
                    code: `typia.${method}`,
                    message: `non-specified generic argument.`,
                });
            }

            // DO TRANSFORM
            return programmer(project)(modulo)(type, node.getFullText().trim(), expression.arguments[0]);
        };

    const name =
        (checker: ts.TypeChecker) =>
        (type: ts.Type) =>
        (node: ts.Node): string =>
            checker.typeToString(type, node, ts.TypeFormatFlags.NodeBuilderFlagsMask);
}
