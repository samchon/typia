import { ILlmApplication, ILlmSchema } from "@samchon/openapi";
import { LlmSchemaConverter } from "@samchon/openapi/lib/converters/LlmSchemaConverter";
import ts from "typescript";

import { ExpressionFactory } from "../../../factories/ExpressionFactory";
import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";
import { StatementFactory } from "../../../factories/StatementFactory";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { LlmApplicationProgrammer } from "../../../programmers/llm/LlmApplicationProgrammer";

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

    // GET MODEL
    const model: ILlmSchema.Model = getTemplateArgument<ILlmSchema.Model>({
      checker: props.context.checker,
      name: "Model",
      is: (value) =>
        LlmSchemaConverter.defaultConfig(value as ILlmSchema.Model) !==
        undefined,
      cast: (value) => value as ILlmSchema.Model,
      default: () => "3.1",
    })(props.expression.typeArguments[1]);

    // GET TYPE
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
      });
    const literal: ts.Expression = ts.factory.createAsExpression(
      LiteralFactory.write(schema),
      ts.factory.createTypeReferenceNode(
        props.context.importer.instance({
          name: "ILlmApplication",
          file: "@samchon/openapi",
          type: true,
          alias: "__ILlmApplication",
        }).text,
        [
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(model),
          ),
        ],
      ),
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

  const getTemplateArgument =
    <Value>(props: {
      checker: ts.TypeChecker;
      name: string;
      is: (value: string) => boolean;
      cast: (value: string) => Value;
      default: () => Value;
    }) =>
    (node: ts.TypeNode | undefined): Value => {
      if (!node) return props.default();

      // CHECK LITERAL TYPE
      const type: ts.Type = props.checker.getTypeFromTypeNode(node);
      if (
        !type.isLiteral() &&
        (type.getFlags() & ts.TypeFlags.BooleanLiteral) === 0
      )
        throw new TransformerError({
          code: "typia.llm.application",
          message: `generic argument "${props.name}" must be constant.`,
        });

      // GET VALUE AND VALIDATE IT
      const value = type.isLiteral()
        ? type.value
        : props.checker.typeToString(type);
      if (typeof value !== "string" || props.is(value) === false)
        throw new TransformerError({
          code: "typia.llm.application",
          message: `invalid value on generic argument "${props.name}".`,
        });
      return props.cast(value);
    };
}
