import ts from "typescript";

import { ProtobufMessageProgrammer } from "../../../programmers/protobuf/ProtobufMessageProgrammer";

import { IProject } from "../../IProject";

export namespace ProtobufMessageTransformer {
    export const transform =
        (project: IProject) =>
        (_modulo: ts.LeftHandSideExpression) =>
        (expression: ts.CallExpression): ts.Expression => {
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
            return ProtobufMessageProgrammer.write(project)(type);
        };
}

const enum ErrorMessages {
    NOT_SPECIFIED = "Error on typia.protobuf.message(): generic argument is not specified.",
    GENERIC_ARGUMENT = "Error on typia.protobuf.message(): non-specified generic argument.",
}
