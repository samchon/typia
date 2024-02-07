import ts from "typescript";

import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { FeatureProgrammer } from "../FeatureProgrammer";

/**
 * @internal
 */
export const decode_union_object =
  (
    checker: (
      input: ts.Expression,
      obj: MetadataObject,
      explore: FeatureProgrammer.IExplore,
    ) => ts.Expression,
  ) =>
  (
    decoder: (
      input: ts.Expression,
      obj: MetadataObject,
      explore: FeatureProgrammer.IExplore,
    ) => ts.Expression,
  ) =>
  (success: (exp: ts.Expression) => ts.Expression) =>
  (escaper: (value: ts.Expression, expected: string) => ts.Statement) =>
  (
    input: ts.Expression,
    targets: MetadataObject[],
    explore: FeatureProgrammer.IExplore,
  ): ts.CallExpression =>
    ts.factory.createCallExpression(
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [],
        undefined,
        undefined,
        iterate(escaper)(
          input,
          targets.map((obj) => ({
            type: "object",
            is: () => success(checker(input, obj, explore)),
            value: () => decoder(input, obj, explore),
          })),
          `(${targets.map((t) => t.name).join(" | ")})`,
        ),
      ),
      undefined,
      undefined,
    );

const iterate =
  (escaper: (value: ts.Expression, expected: string) => ts.Statement) =>
  (input: ts.Expression, unions: IUnion[], expected: string) => {
    interface IBranch {
      condition: null | ts.Expression;
      value: ts.Expression;
    }
    const branches: IBranch[] = [];

    for (const u of unions) {
      const condition: ts.Expression = u.is();
      if (condition.kind === ts.SyntaxKind.TrueKeyword) {
        branches.push({
          condition: null,
          value: u.value(),
        });
        break;
      }
      branches.push({
        condition,
        value: u.value(),
      });
    }
    if (branches.length === 0)
      return ts.factory.createBlock([escaper(input, expected)], true);
    else if (branches.length === 1 && branches[0]!.condition === null)
      return branches[0]!.value;

    const statements: ts.Statement[] = branches.map((b) =>
      b.condition !== null
        ? ts.factory.createIfStatement(
            b.condition,
            ts.factory.createReturnStatement(b.value),
            undefined,
          )
        : ts.factory.createReturnStatement(b.value),
    );
    if (branches.at(-1)!.condition !== null)
      statements.push(escaper(input, expected));
    return ts.factory.createBlock(statements, true);
  };

interface IUnion {
  type: string;
  is: () => ts.Expression;
  value: () => ts.Expression;
}
