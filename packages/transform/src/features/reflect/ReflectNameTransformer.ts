import {
  ITypiaContext,
  MetadataFactory,
  MetadataSchema,
  MetadataStorage,
} from "@typia/core";
import { ValidationPipe } from "@typia/interface";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace ReflectNameTransformer {
  export const transform = (
    props: Pick<ITransformProps, "context" | "expression">,
  ): ts.Expression => {
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.reflect.metadata",
        message: "no generic argument.",
      });
    const top: ts.Node = props.expression.typeArguments[0]!;
    const regular: boolean = (() => {
      // CHECK SECOND ARGUMENT EXISTENCE
      const second: ts.Node | undefined = props.expression.typeArguments[1]!;
      if (second === undefined) return false;

      // GET BOOLEAN VALUE
      const value: MetadataSchema = getMetadata({
        context: props.context,
        node: second,
      });
      return value.size() === 1 &&
        value.constants.length === 1 &&
        value.constants[0]!.type === "boolean" &&
        value.constants[0]!.values.length === 1
        ? (value.constants[0]!.values[0]!.value as boolean)
        : false;
    })();

    // RETURNS NAME
    return ts.factory.createStringLiteral(
      regular
        ? getMetadata({
            context: props.context,
            node: top,
          }).getName()
        : top.getFullText(),
    );
  };
}

const getMetadata = (props: {
  context: ITypiaContext;
  node: ts.Node;
}): MetadataSchema => {
  const type: ts.Type = props.context.checker.getTypeFromTypeNode(
    props.node as ts.TypeNode,
  );
  const collection: MetadataStorage = new MetadataStorage({
    replace: MetadataStorage.replace,
  });
  const result: ValidationPipe<MetadataSchema, MetadataFactory.IError> =
    MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        absorb: false,
        constant: true,
        escape: false,
      },
      components: collection,
      type,
    });
  if (result.success === false)
    throw TransformerError.from({
      code: "typia.reflect.name",
      errors: result.errors,
    });
  return result.data;
};
