import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { NotationGeneralProgrammer } from "./NotationGeneralProgrammer";

export namespace NotationAssertGeneralProgrammer {
  export interface IProps extends IProgrammerProps {
    rename: (str: string) => string;
  }

  export const decompose = (props: {
    rename: (str: string) => string;
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
    const notation: FeatureProgrammer.IDecomposed =
      NotationGeneralProgrammer.decompose({
        ...props,
        validated: true,
      });
    return {
      functions: {
        ...assert.functions,
        ...notation.functions,
      },
      statements: [
        ...assert.statements,
        ...notation.statements,
        StatementFactory.constant({
          name: "__assert",
          value: assert.arrow,
        }),
        StatementFactory.constant({
          name: "__notation",
          value: notation.arrow,
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
        notation.arrow.type,
        undefined,
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("__notation"),
          undefined,
          [
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("__assert"),
              undefined,
              [
                ts.factory.createIdentifier("input"),
                AssertProgrammer.Guardian.identifier(),
              ],
            ),
          ],
        ),
      ),
    };
  };

  export const write = (props: IProps): ts.CallExpression => {
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
