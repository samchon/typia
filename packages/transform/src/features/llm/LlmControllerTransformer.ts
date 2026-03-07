import { LiteralFactory } from "@typia/core";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";
import { LlmApplicationTransformer } from "./LlmApplicationTransformer";

export namespace LlmControllerTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    const dec = LlmApplicationTransformer.decompose("application", props);
    if (dec === null) return props.expression;
    else if (props.expression.arguments[0] === undefined)
      throw new TransformerError({
        code: `typia.llm.controller`,
        message: `no identifier name.`,
      });
    else if (props.expression.arguments[1] === undefined)
      throw new TransformerError({
        code: `typia.llm.controller`,
        message: `no executor.`,
      });

    const typeNode: ts.ImportTypeNode = props.context.importer.type({
      file: "typia",
      name: "ILlmController",
      arguments: [dec.node],
    });
    const primitiveTypeNode: ts.ImportTypeNode = props.context.importer.type({
      file: "typia",
      name: "ILlmApplication.__IPrimitive",
      arguments: [dec.node],
    });
    const value: ts.ObjectLiteralExpression =
      ts.factory.createObjectLiteralExpression(
        [
          ts.factory.createPropertyAssignment(
            "protocol",
            ts.factory.createStringLiteral("class"),
          ),
          ts.factory.createPropertyAssignment(
            "name",
            props.expression.arguments[0],
          ),
          ts.factory.createPropertyAssignment(
            "execute",
            props.expression.arguments[1],
          ),
          ts.factory.createPropertyAssignment(
            "application",
            ts.factory.createCallExpression(
              props.context.importer.internal("llmApplicationFinalize"),
              undefined,
              [
                ts.factory.createAsExpression(
                  ts.factory.createSatisfiesExpression(
                    LiteralFactory.write(dec.application),
                    primitiveTypeNode,
                  ),
                  primitiveTypeNode,
                ),
                ...(props.expression.arguments?.[2] !== undefined
                  ? [
                      LlmApplicationTransformer.getConfigArgument({
                        context: props.context,
                        argument: props.expression.arguments[2],
                        equals: dec.config?.equals,
                      }),
                    ]
                  : []),
              ],
            ),
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
