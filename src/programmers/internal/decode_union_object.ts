import ts from "typescript";

import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";

import { FeatureProgrammer } from "../FeatureProgrammer";

/**
 * @internal
 */
export const decode_union_object = (props: {
  checker: (next: {
    input: ts.Expression;
    object: MetadataObjectType;
    explore: FeatureProgrammer.IExplore;
  }) => ts.Expression;
  decoder: (next: {
    input: ts.Expression;
    object: MetadataObjectType;
    explore: FeatureProgrammer.IExplore;
  }) => ts.Expression;
  success: (exp: ts.Expression) => ts.Expression;
  escaper: (next: { input: ts.Expression; expected: string }) => ts.Statement;
  objects: MetadataObjectType[];
  input: ts.Expression;
  explore: FeatureProgrammer.IExplore;
}): ts.CallExpression =>
  ts.factory.createCallExpression(
    ts.factory.createArrowFunction(
      undefined,
      undefined,
      [],
      undefined,
      undefined,
      iterate({
        escaper: props.escaper,
        input: props.input,
        unions: props.objects.map((object) => ({
          type: "object",
          is: () =>
            props.success(
              props.checker({
                input: props.input,
                explore: props.explore,
                object,
              }),
            ),
          value: () =>
            props.decoder({
              input: props.input,
              explore: props.explore,
              object,
            }),
        })),
        expected: `(${props.objects.map((t) => t.name).join(" | ")})`,
      }),
    ),
    undefined,
    undefined,
  );

/**
 * @internal
 */
const iterate = (props: {
  escaper: (next: { input: ts.Expression; expected: string }) => ts.Statement;
  unions: IUnion[];
  expected: string;
  input: ts.Expression;
}) => {
  interface IBranch {
    condition: null | ts.Expression;
    value: ts.Expression;
  }
  const branches: IBranch[] = [];

  for (const u of props.unions) {
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
    return ts.factory.createBlock([props.escaper(props)], true);
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
    statements.push(props.escaper(props));
  return ts.factory.createBlock(statements, true);
};

/**
 * @internal
 */
interface IUnion {
  type: string;
  is: () => ts.Expression;
  value: () => ts.Expression;
}
