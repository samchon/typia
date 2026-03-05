import {
  LiteralFactory,
  MetadataCollection,
  MetadataFactory,
  MetadataSchema,
} from "@typia/core";
import { IMetadataSchemaUnit } from "@typia/interface";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace ReflectSchemaTransformer {
  export const transform = (
    props: Pick<ITransformProps, "context" | "expression">,
  ): ts.Expression => {
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.reflect.schema",
        message: "no generic argument.",
      });

    // VALIDATE ARGUMENT
    const top: ts.Node | undefined = props.expression.typeArguments[0];
    if (top === undefined || ts.isTypeNode(top) === false)
      return props.expression;

    // GET TYPE
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);
    if (type.isTypeParameter())
      throw new TransformerError({
        code: "typia.reflect.schema",
        message: "non-specified generic argument.",
      });

    // METADATA
    const components: MetadataCollection = new MetadataCollection();
    const result = MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        escape: true,
        constant: true,
        absorb: true,
        functional: true,
      },
      components: components,
      type,
    });
    if (result.success === false)
      throw TransformerError.from({
        code: "typia.reflect.schema",
        errors: result.errors,
      });

    const schema: MetadataSchema = result.data;

    // CONVERT TO PRIMITIVE TYPE
    const unit: IMetadataSchemaUnit = {
      schema: schema.toJSON(),
      components: components.toJSON(),
    };
    return LiteralFactory.write(unit);
  };
}
