import ts from "typescript";

import { ExpressionFactory } from "../../../factories/ExpressionFactory";
import { LiteralFactory } from "../../../factories/LiteralFactory";
import { StatementFactory } from "../../../factories/StatementFactory";

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

    const property: ts.Expression = ts.factory.createAsExpression(
      LiteralFactory.write(dec.application),
      props.context.importer.type({
        file: "@samchon/openapi",
        name: "ILlmApplication",
        arguments: [
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(dec.application.model),
          ),
        ],
      }),
    );
    const value: ts.Expression = ts.factory.createObjectLiteralExpression(
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
        ts.factory.createShorthandPropertyAssignment("application"),
      ],
      true,
    );
    return ExpressionFactory.selfCall(
      ts.factory.createBlock(
        [
          StatementFactory.constant({
            name: "application",
            value: property,
          }),
          ...(props.expression.arguments?.[2] !== undefined
            ? [
                ts.factory.createExpressionStatement(
                  LlmApplicationTransformer.finalize({
                    context: props.context,
                    value: ts.factory.createIdentifier("application"),
                    argument: props.expression.arguments[2]!,
                    equals: dec.config?.equals,
                    model: dec.application.model,
                  }),
                ),
              ]
            : []),
          ts.factory.createReturnStatement(value),
        ],
        true,
      ),
      props.context.importer.type({
        file: "@samchon/openapi",
        name: "ILlmController",
        arguments: [
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(dec.application.model),
          ),
          dec.node,
        ],
      }),
    );
  };
}
