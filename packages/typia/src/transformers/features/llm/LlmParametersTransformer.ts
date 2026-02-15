import { ILlmSchema } from "@typia/interface";
import ts from "typescript";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataComponents } from "../../../factories/MetadataComponents";
import { MetadataFactory } from "../../../factories/MetadataFactory";
import { LlmMetadataFactory } from "../../../programmers/llm/LlmMetadataFactory";
import { LlmParametersProgrammer } from "../../../programmers/llm/LlmParametersProgrammer";
import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";
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
    const config: Partial<ILlmSchema.IConfig> = LlmMetadataFactory.getConfig({
      context: props.context,
      method: "parameters",
      node: props.expression.typeArguments[1],
    }) as Partial<ILlmSchema.IConfig>;

    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);

    // VALIDATE TYPE
    const analyze = (validate: boolean): MetadataSchema => {
      const result: ValidationPipe<MetadataSchema, MetadataFactory.IError> =
        MetadataFactory.analyze({
          checker: props.context.checker,
          transformer: props.context.transformer,
          options: {
            absorb: validate,
            escape: true,
            constant: true,
            validate:
              validate === true
                ? (metadata, explore) =>
                    LlmParametersProgrammer.validate({
                      config,
                      metadata,
                      explore,
                    })
                : undefined,
          },
          components: new MetadataComponents({
            replace: MetadataComponents.replace,
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
    const out: ILlmSchema.IParameters = LlmParametersProgrammer.write({
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
      }),
    );
  };
}
