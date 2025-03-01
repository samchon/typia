import { ILlmSchema } from "@samchon/openapi";
import { ILlmFunction } from "@samchon/openapi/lib/structures/ILlmFunction";
import ts from "typescript";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { LlmModelPredicator } from "../../../programmers/llm/LlmModelPredicator";
import { LlmParametersProgrammer } from "../../../programmers/llm/LlmParametersProgrammer";

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

    // GET TYPE
    const model: ILlmSchema.Model = LlmModelPredicator.getModel({
      checker: props.context.checker,
      method: "parameters",
      node: props.expression.typeArguments[1],
    });
    const config: Partial<ILlmSchema.IConfig> = LlmModelPredicator.getConfig({
      context: props.context,
      method: "parameters",
      model,
      node: props.expression.typeArguments[2],
    }) as Partial<ILlmSchema.IConfig>;

    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);

    // VALIDATE TYPE
    const analyze = (validate: boolean): Metadata => {
      const result: ValidationPipe<Metadata, MetadataFactory.IError> =
        MetadataFactory.analyze({
          checker: props.context.checker,
          transformer: props.context.transformer,
          options: {
            absorb: validate,
            escape: true,
            constant: true,
            validate:
              validate === true
                ? LlmParametersProgrammer.validate({
                    model,
                    config,
                  })
                : undefined,
          },
          collection: new MetadataCollection({
            replace: MetadataCollection.replace,
          }),
          type,
        });
      if (result.success === false)
        throw TransformerError.from({
          code: "typia.llm.parameters",
          errors: result.errors,
        });
      return result.data;
    };
    analyze(true);

    // GENERATE LLM SCHEMA
    const out: ILlmFunction<any>["parameters"] = LlmParametersProgrammer.write({
      model,
      metadata: analyze(false),
      config,
    });
    return ts.factory.createAsExpression(
      LiteralFactory.write(out),
      props.context.importer.type({
        file: "@samchon/openapi",
        name: ts.factory.createQualifiedName(
          ts.factory.createIdentifier("ILlmSchema"),
          ts.factory.createIdentifier("IParameters"),
        ),
        arguments: [
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(model),
          ),
        ],
      }),
    );
  };
}
