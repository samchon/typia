import {
  LlmApplicationProgrammer,
  LlmControllerProgrammer,
  LlmMetadataFactory,
  MetadataCollection,
  MetadataFactory,
  MetadataSchema,
} from "@typia/core";
import { ILlmSchema, ValidationPipe } from "@typia/interface";
import ts from "@typescript/native-preview";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmControllerTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.llm.controller",
        message: "no generic argument.",
      });
    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return props.expression;

    if (props.expression.arguments[0] === undefined)
      throw new TransformerError({
        code: "typia.llm.controller",
        message: "no identifier name.",
      });
    if (props.expression.arguments[1] === undefined)
      throw new TransformerError({
        code: "typia.llm.controller",
        message: "no executor.",
      });

    // GET CONFIG
    const config:
      | Partial<
          ILlmSchema.IConfig & {
            equals: boolean;
          }
        >
      | undefined = LlmMetadataFactory.getConfig({
      context: props.context,
      method: "controller",
      node: props.expression.typeArguments[1],
    });
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
            functional: true,
            validate:
              validate === true
                ? (next) =>
                    LlmApplicationProgrammer.validate({
                      config,
                      metadata: next.metadata,
                      explore: next.explore,
                      top: next.top,
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
          code: "typia.llm.controller",
          errors: result.errors,
        });
      return result.data;
    };
    analyze(true);

    // GENERATE LLM CONTROLLER
    return LlmControllerProgrammer.write({
      context: props.context,
      modulo: props.modulo,
      metadata: analyze(false),
      className: top.getFullText().trim(),
      config,
      node: top,
      nameArgument: props.expression.arguments[0],
      executeArgument: props.expression.arguments[1],
      configArgument: props.expression.arguments[2],
    });
  };
}
