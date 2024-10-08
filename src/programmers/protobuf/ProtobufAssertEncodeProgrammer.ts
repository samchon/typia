import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { ProtobufEncodeProgrammer } from "./ProtobufEncodeProgrammer";

export namespace ProtobufAssertEncodeProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
    init?: ts.Expression | undefined;
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
    const encode: FeatureProgrammer.IDecomposed =
      ProtobufEncodeProgrammer.decompose(props);
    return {
      functions: {
        ...assert.functions,
        ...encode.functions,
      },
      statements: [
        ...assert.statements,
        ...encode.statements,
        StatementFactory.constant({
          name: "__assert",
          value: assert.arrow,
        }),
        StatementFactory.constant({
          name: "__encode",
          value: encode.arrow,
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
        encode.arrow.type,
        undefined,
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("__encode"),
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
