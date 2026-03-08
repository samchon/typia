import {
  JsonApplicationProgrammer,
  MetadataCollection,
  MetadataFactory,
  MetadataSchema,
} from "@typia/core";
import { ValidationPipe } from "@typia/interface";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace JsonApplicationTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.json.application",
        message: "no generic argument.",
      });

    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return props.expression;

    const version: "3.0" | "3.1" = get_parameter<"3.0" | "3.1">({
      checker: props.context.checker,
      name: "Version",
      is: (str) => str === "3.0" || str === "3.1",
      cast: (str) => str as "3.0" | "3.1",
      default: () => "3.1",
    })(props.expression.typeArguments[1]);

    // GET TYPE
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);
    const collection: MetadataCollection = new MetadataCollection({
      replace: MetadataCollection.replace,
    });
    const result: ValidationPipe<MetadataSchema, MetadataFactory.IError> =
      MetadataFactory.analyze({
        checker: props.context.checker,
        transformer: props.context.transformer,
        options: {
          escape: true,
          constant: true,
          absorb: false,
          functional: true,
          validate: JsonApplicationProgrammer.validate,
        },
        components: collection,
        type,
      });
    if (result.success === false)
      throw TransformerError.from({
        code: "typia.json.application",
        errors: result.errors,
      });

    // GENERATE JSON APPLICATION
    return JsonApplicationProgrammer.write({
      context: props.context,
      version,
      metadata: result.data,
    });
  };

  const get_parameter =
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
          code: "typia.json.application",
          message: `generic argument "${props.name}" must be constant.`,
        });

      // GET VALUE AND VALIDATE IT
      const value = type.isLiteral()
        ? type.value
        : props.checker.typeToString(type);
      if (typeof value !== "string" || props.is(value) === false)
        throw new TransformerError({
          code: "typia.json.application",
          message: `invalid value on generic argument "${props.name}".`,
        });
      return props.cast(value);
    };
}
