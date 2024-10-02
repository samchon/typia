import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { LiteralFactory } from "../../factories/LiteralFactory";

import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";

import { Customizable } from "../../typings/Customizable";

/**
 * @internal
 */
export const random_custom = (props: {
  accessor: (name: string) => ts.Expression;
  type: keyof Customizable;
  tags: IMetadataTypeTag[];
  expression: ts.Expression;
}) =>
  ExpressionFactory.coalesce(
    ts.factory.createCallChain(
      ts.factory.createPropertyAccessChain(
        props.accessor("customs"),
        ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
        ts.factory.createIdentifier(props.type),
      ),
      ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
      undefined,
      [
        LiteralFactory.generate(
          props.tags.map((t) => ({
            name: t.name,
            kind: t.kind,
            value: t.value,
          })),
        ),
      ],
    ),
    props.expression,
  );
