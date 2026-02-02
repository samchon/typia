import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../../schemas/metadata/MetadataArrayType";
import { MetadataMap } from "../../schemas/metadata/MetadataMap";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { CheckerProgrammer } from "../CheckerProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { UnionExplorer } from "../helpers/UnionExplorer";

/** @internal */
export const check_union_array_like = <
  Origin extends Metadata | MetadataArray | MetadataTuple | MetadataMap,
  Category extends MetadataArray | MetadataTuple,
  Element,
>(props: {
  config: check_union_array_like.IConfig<Category, Element>;
  accessor: check_union_array_like.IAccessor<Origin, Category, Element>;
  parameters: ts.ParameterDeclaration[];
  input: ts.Expression;
  definitions: Origin[];
  explore: FeatureProgrammer.IExplore;
}): ts.ArrowFunction => {
  // ONLY ONE TYPE
  const targets: Array<Category> = props.definitions.map(
    props.accessor.transform,
  );
  if (targets.length === 1)
    return ts.factory.createArrowFunction(
      undefined,
      undefined,
      props.parameters,
      undefined,
      undefined,
      props.config.decoder({
        input: props.accessor.array(props.input),
        definition: targets[0]!,
        explore: props.explore,
      }),
    );

  const array = ts.factory.createIdentifier("array");
  const top = ts.factory.createIdentifier("top");

  const statements: ts.Statement[] = [];
  const tupleList: MetadataTuple[] = targets.filter(
    (t) => t instanceof MetadataTuple,
  ) as MetadataTuple[];
  const arrayList: MetadataArray[] = targets.filter(
    (t) => t instanceof MetadataArray,
  ) as MetadataArray[];

  const predicate = (meta: Category): ts.Expression =>
    ts.factory.createAsExpression(
      ts.factory.createArrayLiteralExpression(
        [
          ts.factory.createArrowFunction(
            undefined,
            undefined,
            [
              IdentifierFactory.parameter(
                "top",
                meta instanceof MetadataArrayType
                  ? TypeFactory.keyword("any")
                  : ts.factory.createTypeReferenceNode("any[]"),
              ),
            ],
            TypeFactory.keyword("any"),
            undefined,
            props.config.checker({
              input: ts.factory.createIdentifier("top"),
              definition: props.accessor.element(meta),
              explore: {
                ...props.explore,
                tracable: false,
                postfix: meta instanceof MetadataArrayType ? `"[0]"` : "",
              },
              container: array,
            }),
          ),
          ts.factory.createArrowFunction(
            undefined,
            undefined,
            [
              IdentifierFactory.parameter(
                "entire",
                ts.factory.createTypeReferenceNode("any[]"),
              ),
            ],
            TypeFactory.keyword("any"),
            undefined,
            props.config.decoder({
              input: ts.factory.createIdentifier("entire"),
              definition: meta,
              explore: {
                ...props.explore,
                tracable: true,
              },
            }),
          ),
        ],
        true,
      ),
      ts.factory.createTypeReferenceNode("const"),
    );
  const iterate = (props: {
    init: string;
    from: ts.Expression;
    if: ts.IfStatement;
  }): ts.ForOfStatement =>
    ts.factory.createForOfStatement(
      undefined,
      ts.factory.createVariableDeclarationList(
        [ts.factory.createVariableDeclaration(props.init)],
        ts.NodeFlags.Const,
      ),
      props.from,
      props.if,
    );

  if (tupleList.length)
    statements.push(
      StatementFactory.constant({
        name: "array",
        value: props.accessor.array(props.input),
      }),
      StatementFactory.constant({
        name: "tuplePredicators",
        value: ts.factory.createArrayLiteralExpression(
          tupleList.map((x) => predicate(x as Category)),
          true,
        ),
      }),
      iterate({
        init: "pred",
        from: ts.factory.createIdentifier("tuplePredicators"),
        if: ts.factory.createIfStatement(
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("pred[0]"),
            undefined,
            [array],
          ),
          ts.factory.createReturnStatement(
            ts.factory.createCallExpression(
              ts.factory.createIdentifier(`pred[1]`),
              undefined,
              [array],
            ),
          ),
        ),
      }),
    );
  if (arrayList.length) {
    if (tupleList.length === 0)
      statements.push(
        StatementFactory.constant({
          name: "array",
          value: props.accessor.array(props.input),
        }),
      );
    statements.push(
      StatementFactory.constant({
        name: "top",
        value: props.accessor.front(props.input),
      }),
      ts.factory.createIfStatement(
        ts.factory.createStrictEquality(
          ExpressionFactory.number(0),
          props.accessor.size(props.input),
        ),
        ts.isReturnStatement(props.config.empty)
          ? props.config.empty
          : ts.factory.createReturnStatement(props.config.empty),
      ),
      StatementFactory.constant({
        name: "arrayPredicators",
        value: ts.factory.createArrayLiteralExpression(
          arrayList.map((x) => predicate(x as Category)),
          true,
        ),
      }),
      StatementFactory.constant({
        name: "passed",
        value: ts.factory.createCallExpression(
          IdentifierFactory.access(
            ts.factory.createIdentifier("arrayPredicators"),
            "filter",
          ),
          undefined,
          [
            ts.factory.createArrowFunction(
              undefined,
              undefined,
              [IdentifierFactory.parameter("pred")],
              undefined,
              undefined,
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("pred[0]"),
                undefined,
                [top],
              ),
            ),
          ],
        ),
      }),
      ts.factory.createIfStatement(
        ts.factory.createStrictEquality(
          ExpressionFactory.number(1),
          ts.factory.createIdentifier("passed.length"),
        ),
        ts.factory.createReturnStatement(
          ts.factory.createCallExpression(
            ts.factory.createElementAccessExpression(
              ts.factory.createNonNullExpression(
                ts.factory.createIdentifier("passed[0]"),
              ),
              1,
            ),
            undefined,
            [array],
          ),
        ),
        ts.factory.createIfStatement(
          ts.factory.createLessThan(
            ExpressionFactory.number(1),
            ts.factory.createIdentifier("passed.length"),
          ),
          iterate({
            init: "pred",
            from: ts.factory.createIdentifier("passed"),
            if: ts.factory.createIfStatement(
              ts.factory.createCallExpression(
                IdentifierFactory.access(array, "every"),
                undefined,
                [
                  ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [
                      IdentifierFactory.parameter(
                        "value",
                        TypeFactory.keyword("any"),
                      ),
                    ],
                    undefined,
                    undefined,
                    ts.factory.createStrictEquality(
                      props.config.success,
                      ts.factory.createCallExpression(
                        ts.factory.createIdentifier("pred[0]"),
                        undefined,
                        [ts.factory.createIdentifier("value")],
                      ),
                    ),
                  ),
                ],
              ),
              ts.factory.createReturnStatement(
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier(`pred[1]`),
                  undefined,
                  [ts.factory.createIdentifier("array")],
                ),
              ),
            ),
          }),
        ),
      ),
    );
  }
  statements.push(
    props.config.failure({
      input: props.input,
      expected: `(${targets
        .map((t) => props.accessor.name(t, props.accessor.element(t)))
        .join(" | ")})`,
      explore: props.explore,
    }),
  );
  return ts.factory.createArrowFunction(
    undefined,
    undefined,
    props.parameters,
    undefined,
    undefined,
    ts.factory.createBlock(statements, true),
  );
};

/** @internal */
export namespace check_union_array_like {
  export interface IConfig<
    Category extends MetadataArray | MetadataTuple,
    Element,
  > {
    checker(props: {
      input: ts.Expression;
      definition: Element;
      explore: FeatureProgrammer.IExplore;
      container: ts.Expression;
    }): ts.Expression;
    decoder: UnionExplorer.Decoder<Category>;
    empty: ts.ReturnStatement | ts.Expression;
    success: ts.Expression;
    failure(props: {
      input: ts.Expression;
      expected: string;
      explore: CheckerProgrammer.IExplore;
    }): ts.Statement;
  }

  export interface IAccessor<
    Origin,
    Category extends MetadataArray | MetadataTuple,
    Element,
  > {
    transform(origin: Origin): Category;
    element(meta: Category): Element;
    name(meta: Category, elem: Element): string;
    front(input: ts.Expression): ts.Expression;
    array(input: ts.Expression): ts.Expression;
    size(input: ts.Expression): ts.Expression;
  }
}
