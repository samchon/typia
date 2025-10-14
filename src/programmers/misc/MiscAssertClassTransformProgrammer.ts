import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { MiscClassTransformProgrammer } from "./MiscClassTransformProgrammer";

export namespace MiscAssertClassTransformProgrammer {
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
    const classTransform: FeatureProgrammer.IDecomposed = MiscClassTransformProgrammer.decompose({
      ...props,
      validated: true,
    });
    return {
      functions: {
        ...assert.functions,
        ...classTransform.functions,
      },
      statements: [
        ...assert.statements,
        ...classTransform.statements,
        StatementFactory.constant({
          name: "__assert",
          value: assert.arrow,
        }),
        StatementFactory.constant({
          name: "__classTransform",
          value: classTransform.arrow,
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("unknown")),
          AssertProgrammer.Guardian.parameter({
            context: props.context,
            init: props.init,
          }),
        ],
        classTransform.arrow.type,
        undefined,
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("__classTransform"),
          undefined,
          [
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("__assert"),
              undefined,
              [
                ts.factory.createIdentifier("input"),
                ts.factory.createIdentifier("errorFactory"),
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