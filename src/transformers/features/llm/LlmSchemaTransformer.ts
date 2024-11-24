import { ILlmApplication } from "@samchon/openapi";
import ts from "typescript";

import { IdentifierFactory } from "../../../factories/IdentifierFactory";
import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { LlmSchemaProgrammer } from "../../../programmers/llm/LlmSchemaProgrammer";

import { ValidationPipe } from "../../../typings/ValidationPipe";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmSchemaTransformer {
  export const transform = (
    props: Omit<ITransformProps, "modulo">,
  ): ts.Expression => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.llm.schema",
        message: "no generic argument.",
      });

    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return props.expression;

    // GET MODEL
    const model: ILlmApplication.Model =
      getTemplateArgument<ILlmApplication.Model>({
        checker: props.context.checker,
        name: "Model",
        is: (value) =>
          value === "chatgpt" ||
          value === "gemini" ||
          value === "claude" ||
          value === "3.1" ||
          value === "3.0",
        cast: (value) => value as ILlmApplication.Model,
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
          validate: LlmSchemaProgrammer.validate(model),
        },
        collection,
        type,
      });
    if (result.success === false)
      throw TransformerError.from({
        code: "typia.llm.schema",
        errors: result.errors,
      });

    // GENERATE LLM SCHEMA
    const out: LlmSchemaProgrammer.IOutput<any> = LlmSchemaProgrammer.write({
      model,
      metadata: result.data,
    });
    if (Object.keys(out.$defs).length === 0)
      return LiteralFactory.write(out.schema);
    return ts.factory.createCallExpression(
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "$defs",
            ts.factory.createTypeReferenceNode("Record<string, unknown>"),
            undefined,
          ),
        ],
        undefined,
        undefined,
        ts.factory.createBlock(
          [
            ts.factory.createExpressionStatement(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("Object.assign"),
                undefined,
                [
                  ts.factory.createIdentifier("$defs"),
                  LiteralFactory.write(out.$defs),
                ],
              ),
            ),
            ts.factory.createReturnStatement(LiteralFactory.write(out.schema)),
          ],
          true,
        ),
      ),
      undefined,
      [props.expression.arguments[0]!],
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
          code: "typia.llm.schema",
          message: `generic argument "${props.name}" must be constant.`,
        });

      // GET VALUE AND VALIDATE IT
      const value = type.isLiteral()
        ? type.value
        : props.checker.typeToString(type);
      if (typeof value !== "string" || props.is(value) === false)
        throw new TransformerError({
          code: "typia.llm.schema",
          message: `invalid value on generic argument "${props.name}".`,
        });
      return props.cast(value);
    };
}
