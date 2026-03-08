import {
  LlmMetadataFactory,
  LlmParametersProgrammer,
  MetadataCollection,
  MetadataFactory,
  MetadataSchema,
} from "@typia/core";
import { ILlmSchema, ValidationPipe } from "@typia/interface";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmParametersTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
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
          components: new MetadataCollection({
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

    // GENERATE LLM PARAMETERS SCHEMA
    return LlmParametersProgrammer.write({
      context: props.context,
      metadata: analyze(false),
      config,
    });
  };
}
