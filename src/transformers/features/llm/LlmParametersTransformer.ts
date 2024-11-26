import { ILlmSchema } from "@samchon/openapi";
import { LlmSchemaConverter } from "@samchon/openapi/lib/converters/LlmSchemaConverter";
import { ILlmFunction } from "@samchon/openapi/lib/structures/ILlmFunction";
import ts from "typescript";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { LlmParametersProgrammer } from "../../../programmers/llm/LlmParametersProgrammer";
import { LlmSchemaProgrammer } from "../../../programmers/llm/LlmSchemaProgrammer";

import { ValidationPipe } from "../../../typings/ValidationPipe";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmParametersTransformer {
  export const transform = (
    props: Omit<ITransformProps, "modulo">,
  ): ts.Expression => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.llm.parameters",
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
          validate: LlmSchemaProgrammer.validate(model),
        },
        collection,
        type,
      });
    if (result.success === false)
      throw TransformerError.from({
        code: "typia.llm.parameters",
        errors: result.errors,
      });

    // GENERATE LLM SCHEMA
    const out: ILlmFunction<any>["parameters"] = LlmParametersProgrammer.write({
      model,
      metadata: result.data,
    });
    return ts.factory.createAsExpression(
      LiteralFactory.write(out),
      ts.factory.createTypeReferenceNode(
        props.context.importer.instance({
          name: "ILlmSchema",
          file: "@samchon/openapi",
          type: true,
          alias: "__ILlmSchema",
        }).text + ".IParameters",
        [
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(model),
          ),
        ],
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
          code: "typia.llm.parameters",
          message: `generic argument "${props.name}" must be constant.`,
        });

      // GET VALUE AND VALIDATE IT
      const value = type.isLiteral()
        ? type.value
        : props.checker.typeToString(type);
      if (typeof value !== "string" || props.is(value) === false)
        throw new TransformerError({
          code: "typia.llm.parameters",
          message: `invalid value on generic argument "${props.name}".`,
        });
      return props.cast(value);
    };
}
