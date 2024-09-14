import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { Atomic } from "../../typings/Atomic";

export namespace MiscLiteralsProgrammer {
  export interface IProps {
    context: ITypiaContext;
    type: ts.Type;
  }
  export const write = (props: IProps) => {
    const result = MetadataFactory.analyze(
      props.context.checker,
      props.context.transformer,
    )({
      escape: true,
      constant: true,
      absorb: true,
      validate: (meta) => {
        const length: number =
          meta.constants
            .map((c) => c.values.length)
            .reduce((a, b) => a + b, 0) +
          meta.atomics.filter((a) => a.type === "boolean").length;
        if (0 === length) return [ErrorMessages.NO];
        else if (meta.size() !== length) return [ErrorMessages.ONLY];
        return [];
      },
    })(new MetadataCollection())(props.type);
    if (result.success === false)
      throw TransformerError.from(`typia.misc.literals`)(result.errors);

    const meta: Metadata = result.data;
    const values: Set<Atomic.Type | null> = new Set([
      ...meta.constants.map((c) => c.values.map((v) => v.value)).flat(),
      ...(meta.atomics.filter((a) => a.type === "boolean").length
        ? [true, false]
        : []),
      ...(meta.nullable ? [null] : []),
    ]);
    return ts.factory.createAsExpression(
      ts.factory.createArrayLiteralExpression(
        [...values].map((v) =>
          v === null
            ? ts.factory.createNull()
            : typeof v === "boolean"
              ? v
                ? ts.factory.createTrue()
                : ts.factory.createFalse()
              : typeof v === "number"
                ? ExpressionFactory.number(v)
                : typeof v === "bigint"
                  ? ExpressionFactory.bigint(Number(v))
                  : ts.factory.createStringLiteral(v),
        ),
        true,
      ),
      ts.factory.createTypeReferenceNode("const"),
    );
  };
}

enum ErrorMessages {
  NO = "no constant literal type found.",
  ONLY = "only constant literal types are allowed.",
}
