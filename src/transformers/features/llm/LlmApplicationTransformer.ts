import { ILlmApplication, ILlmSchema } from "@samchon/openapi";
import ts from "typescript";

import { ExpressionFactory } from "../../../factories/ExpressionFactory";
import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";
import { StatementFactory } from "../../../factories/StatementFactory";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { LlmApplicationProgrammer } from "../../../programmers/llm/LlmApplicationProgrammer";
import { LlmModelPredicator } from "../../../programmers/llm/LlmModelPredicator";

import { ValidationPipe } from "../../../typings/ValidationPipe";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmApplicationTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.llm.schema",
        message: "no generic argument.",
      });

    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return props.expression;

    // GET TYPE
    const model: ILlmSchema.Model = LlmModelPredicator.getModel({
      checker: props.context.checker,
      method: "application",
      node: props.expression.typeArguments[1],
    });
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);
    const collection: MetadataCollection = new MetadataCollection({
      replace: MetadataCollection.replace,
    });
    const result: ValidationPipe<Metadata, MetadataFactory.IError> =
      MetadataFactory.analyze({
        checker: props.context.checker,
        transformer: props.context.transformer,
        options: {
          escape: true,
          constant: true,
          absorb: false,
          functional: true,
          validate: LlmApplicationProgrammer.validate(model),
        },
        collection,
        type,
      });
    if (result.success === false)
      throw TransformerError.from({
        code: "typia.llm.application",
        errors: result.errors,
      });

    // GENERATE LLM APPLICATION
    const schema: ILlmApplication<ILlmSchema.Model> =
      LlmApplicationProgrammer.write({
        model,
        metadata: result.data,
        config: LlmModelPredicator.getConfig({
          context: props.context,
          method: "application",
          model,
          node: props.expression.typeArguments[2],
        }),
      });
    const literal: ts.Expression = ts.factory.createAsExpression(
      LiteralFactory.write(schema),
      props.context.importer.type({
        file: "@samchon/openapi",
        name: "ILlmApplication",
        arguments: [
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(model),
          ),
        ],
      }),
    );
    if (!props.expression.arguments?.[0]) return literal;

    return ExpressionFactory.selfCall(
      ts.factory.createBlock(
        [
          StatementFactory.constant({
            name: "app",
            value: literal,
          }),
          ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(
              props.context.importer.internal("llmApplicationFinalize"),
              undefined,
              [
                ts.factory.createIdentifier("app"),
                ...(props.expression.arguments?.[0]
                  ? [props.expression.arguments[0]]
                  : []),
              ],
            ),
          ),
          ts.factory.createReturnStatement(ts.factory.createIdentifier("app")),
        ],
        true,
      ),
    );
  };
}
