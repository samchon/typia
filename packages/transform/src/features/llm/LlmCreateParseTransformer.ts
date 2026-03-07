import {
  LlmMetadataFactory,
  LlmParseProgrammer,
  MetadataCollection,
  MetadataFactory,
  MetadataSchema,
} from "@typia/core";
import { ILlmSchema, ValidationPipe } from "@typia/interface";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmCreateParseTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.llm.createParse",
        message: "no generic argument.",
      });

    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return props.expression;

    // GET TYPE AND CONFIG
    const config: Partial<ILlmSchema.IConfig> = LlmMetadataFactory.getConfig({
      context: props.context,
      method: "createParse",
      node: props.expression.typeArguments[1],
    }) as Partial<ILlmSchema.IConfig>;

    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);

    if (type.isTypeParameter())
      throw new TransformerError({
        code: "typia.llm.createParse",
        message: "non-specified generic argument.",
      });

    // VALIDATE TYPE
    const result: ValidationPipe<MetadataSchema, MetadataFactory.IError> =
      MetadataFactory.analyze({
        checker: props.context.checker,
        transformer: props.context.transformer,
        options: {
          absorb: true,
          escape: true,
          constant: true,
          validate: (metadata, explore) =>
            LlmParseProgrammer.validate({
              config,
              metadata,
              explore,
            }),
        },
        components: new MetadataCollection({
          replace: MetadataCollection.replace,
        }),
        type,
      });
    if (result.success === false)
      throw TransformerError.from({
        code: "typia.llm.createParse",
        errors: result.errors,
      });

    // GENERATE CODE (factory returns the function directly)
    return LlmParseProgrammer.write({
      context: props.context,
      modulo: props.modulo,
      type,
      name: (top as ts.TypeNode).getFullText().trim(),
      config,
    });
  };
}
