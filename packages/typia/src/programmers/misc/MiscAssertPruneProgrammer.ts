import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { MiscPruneProgrammer } from "./MiscPruneProgrammer";

export namespace MiscAssertPruneProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
    init?: ts.Expression | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const assert: FeatureProgrammer.IDecomposed = AssertProgrammer.decompose({
      ...props,
      config: {
        equals: false,
        guard: false,
      },
    });
    const prune: FeatureProgrammer.IDecomposed = MiscPruneProgrammer.decompose({
      ...props,
      validated: true,
    });
    return {
      functions: {
        ...assert.functions,
        ...prune.functions,
      },
      statements: [
        ...assert.statements,
        ...prune.statements,
        StatementFactory.constant({
          name: "__assert",
          value: assert.arrow,
        }),
        StatementFactory.constant({
          name: "__prune",
          value: prune.arrow,
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
          AssertProgrammer.Guardian.parameter({
            context: props.context,
            init: props.init,
          }),
        ],
        ts.factory.createTypeReferenceNode(
          props.name ??
            TypeFactory.getFullName({
              checker: props.context.checker,
              type: props.type,
            }),
        ),
        undefined,
        ts.factory.createBlock(
          [
            ts.factory.createExpressionStatement(
              ts.factory.createBinaryExpression(
                ts.factory.createIdentifier("input"),
                ts.SyntaxKind.EqualsToken,
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("__assert"),
                  undefined,
                  [
                    ts.factory.createIdentifier("input"),
                    AssertProgrammer.Guardian.identifier(),
                  ],
                ),
              ),
            ),
            ts.factory.createExpressionStatement(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__prune"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
            ts.factory.createReturnStatement(
              ts.factory.createIdentifier("input"),
            ),
          ],
          true,
        ),
      ),
    };
  };

  export const write = (props: IProgrammerProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      functor,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };
}
