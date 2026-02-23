import {
  LiteralFactory,
  MetadataFactory,
  MetadataSchema,
  MetadataStorage,
} from "@typia/core";
import { IMetadataSchemaCollection } from "@typia/interface";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace ReflectMetadataTransformer {
  export const transform = (
    props: Pick<ITransformProps, "context" | "expression">,
  ): ts.Expression => {
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.reflect.metadata",
        message: "no generic argument.",
      });

    // VALIDATE TUPLE ARGUMENTS
    const top: ts.Node = props.expression.typeArguments[0]!;
    if (!ts.isTupleTypeNode(top)) return props.expression;
    else if (top.elements.some((child) => !ts.isTypeNode(child)))
      return props.expression;

    // GET TYPES
    const types: ts.Type[] = top.elements.map((child) =>
      props.context.checker.getTypeFromTypeNode(child as ts.TypeNode),
    );
    if (types.some((t) => t.isTypeParameter()))
      throw new TransformerError({
        code: "typia.reflect.metadata",
        message: "non-specified generic argument(s).",
      });

    // METADATA
    const components: MetadataStorage = new MetadataStorage();
    const schemas: Array<MetadataSchema> = types.map((type) => {
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
          code: "typia.reflect.metadata",
          errors: result.errors,
        });
      return result.data;
    });

    // CONVERT TO PRIMITIVE TYPE
    const collection: IMetadataSchemaCollection = {
      schemas: schemas.map((s) => s.toJSON()),
      components: components.toJSON(),
    };
    return LiteralFactory.write(collection);
  };
}
