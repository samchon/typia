import ts from "typescript";

import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import type { Metadata } from "../../../schemas/metadata/Metadata";

import type { ValidationPipe } from "../../../typings/ValidationPipe";

import type { ITransformProps } from "../../ITransformProps";
import type { ITypiaContext } from "../../ITypiaContext";
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

      // GET BOOELAN VALUE
      const value: Metadata = getMetadata({
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
}): Metadata => {
  const type: ts.Type = props.context.checker.getTypeFromTypeNode(
    props.node as ts.TypeNode,
  );
  const collection: MetadataCollection = new MetadataCollection({
    replace: MetadataCollection.replace,
  });
  const result: ValidationPipe<Metadata, MetadataFactory.IError> =
    MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        escape: false,
        constant: true,
        absorb: false,
      },
      collection,
      type,
    });
  if (result.success === false)
    throw TransformerError.from({
      code: "typia.reflect.name",
      errors: result.errors,
    });
  return result.data;
};
