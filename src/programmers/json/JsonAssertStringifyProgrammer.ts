import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { JsonStringifyProgrammer } from "./JsonStringifyProgrammer";

export namespace JsonAssertStringifyProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
    init: ts.Expression | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const assert: FeatureProgrammer.IDecomposed = AssertProgrammer.decompose({
      ...props,
      context: {
        ...props.context,
        options: {
          ...props.context.options,
          functional: false,
          numeric: true,
        },
      },
      config: {
        equals: false,
        guard: false,
      },
    });
    const stringify: FeatureProgrammer.IDecomposed =
      JsonStringifyProgrammer.decompose({
        ...props,
        validated: true,
      });
    return {
      functions: {
        ...assert.functions,
        ...stringify.functions,
      },
      statements: [
        ...assert.statements,
        ...stringify.statements,
        StatementFactory.constant({
          name: "__assert",
          value: assert.arrow,
        }),
        StatementFactory.constant({
          name: "__stringify",
          value: stringify.arrow,
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
        stringify.arrow.type,
        undefined,
        ts.factory.createBlock(
          [
            ts.factory.createExpressionStatement(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__assert"),
                undefined,
                [
                  ts.factory.createIdentifier("input"),
                  AssertProgrammer.Guardian.identifier(),
                ],
              ),
            ),
            ts.factory.createReturnStatement(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__stringify"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
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
      context: props.context,
      functor,
      type: props.type,
      name: props.name,
      init: props.init,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };
}
