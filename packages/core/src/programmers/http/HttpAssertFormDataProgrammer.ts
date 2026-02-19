import ts from "typescript";

import { IProgrammerProps } from "../../context/IProgrammerProps";
import { ITypiaContext } from "../../context/ITypiaContext";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";
import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { FeatureProgrammer } from "../internal/FeatureProgrammer";
import { HttpFormDataProgrammer } from "./HttpFormDataProgrammer";

export namespace HttpAssertFormDataProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
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
    const decode: FeatureProgrammer.IDecomposed =
      HttpFormDataProgrammer.decompose(props);
    return {
      functions: {
        ...assert.functions,
        ...decode.functions,
      },
      statements: [
        ...assert.statements,
        ...decode.statements,
        StatementFactory.constant({
          name: "__assert",
          value: assert.arrow,
        }),
        StatementFactory.constant({
          name: "__decode",
          value: decode.arrow,
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
        decode.arrow.type,
        undefined,
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("__assert"),
          undefined,
          [
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("__decode"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
            AssertProgrammer.Guardian.identifier(),
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
