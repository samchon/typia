import {
  LlmCoerceProgrammer,
  LlmMetadataFactory,
  MetadataCollection,
  MetadataFactory,
  MetadataSchema,
} from "@typia/core";
import { ILlmSchema, ValidationPipe } from "@typia/interface";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmCoerceTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // CHECK PARAMETER
    if (props.expression.arguments.length === 0)
      throw new TransformerError({
        code: "typia.llm.coerce",
        message: "no input value.",
      });

    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.llm.coerce",
        message: "no generic argument.",
      });

    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return props.expression;

    // GET TYPE AND CONFIG
    const config: Partial<ILlmSchema.IConfig> = LlmMetadataFactory.getConfig({
      context: props.context,
      method: "coerce",
      node: props.expression.typeArguments[1],
    }) as Partial<ILlmSchema.IConfig>;

    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);

    if (type.isTypeParameter())
      throw new TransformerError({
        code: "typia.llm.coerce",
        message: "non-specified generic argument.",
      });

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
                    LlmCoerceProgrammer.validate({
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
          code: "typia.llm.coerce",
          errors: result.errors,
        });
      return result.data;
    };
    analyze(true);

    // GENERATE CODE
    return ts.factory.createCallExpression(
      LlmCoerceProgrammer.write({
        context: props.context,
        modulo: props.modulo,
        metadata: analyze(false),
        name: (top as ts.TypeNode).getFullText().trim(),
        config,
      }),
      undefined,
      props.expression.arguments,
    );
  };
}
