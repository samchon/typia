import { ILlmSchema } from "@typia/interface";
import ts from "typescript";

import { ITypiaContext } from "../../context/ITypiaContext";
import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";
import { LlmApplicationProgrammer } from "./LlmApplicationProgrammer";

export namespace LlmControllerProgrammer {
  export interface IWriteProps {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    metadata: MetadataSchema;
    config?: Partial<
      ILlmSchema.IConfig & {
        equals: boolean;
      }
    >;
    className?: string;
    node: ts.TypeNode;
    nameArgument: ts.Expression;
    executeArgument: ts.Expression;
    configArgument?: ts.Expression;
  }

  export const write = (props: IWriteProps): ts.Expression => {
    const typeNode: ts.ImportTypeNode = props.context.importer.type({
      file: "typia",
      name: "ILlmController",
      arguments: [props.node],
    });
    const value: ts.ObjectLiteralExpression =
      ts.factory.createObjectLiteralExpression(
        [
          ts.factory.createPropertyAssignment(
            "protocol",
            ts.factory.createStringLiteral("class"),
          ),
          ts.factory.createPropertyAssignment("name", props.nameArgument),
          ts.factory.createPropertyAssignment("execute", props.executeArgument),
          ts.factory.createPropertyAssignment(
            "application",
            LlmApplicationProgrammer.write({
              context: props.context,
              modulo: props.modulo,
              metadata: props.metadata,
              config: props.config,
              name: props.className,
              configArgument: props.configArgument,
            }),
          ),
        ],
        true,
      );
    return ts.factory.createAsExpression(
      ts.factory.createSatisfiesExpression(value, typeNode),
      typeNode,
    );
  };
}
