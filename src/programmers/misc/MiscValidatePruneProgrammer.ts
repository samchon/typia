import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { MiscPruneProgrammer } from "./MiscPruneProgrammer";

export namespace MiscValidatePruneProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const validate: FeatureProgrammer.IDecomposed =
      ValidateProgrammer.decompose({
        ...props,
        config: {
          equals: false,
        },
      });
    const prune: FeatureProgrammer.IDecomposed = MiscPruneProgrammer.decompose({
      ...props,
      validated: true,
    });
    return {
      functions: {
        ...validate.functions,
        ...prune.functions,
      },
      statements: [
        ...validate.statements,
        ...prune.statements,
        StatementFactory.constant({
          name: "__validate",
          value: validate.arrow,
        }),
        StatementFactory.constant({
          name: "__prune",
          value: prune.arrow,
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        props.context.importer.type({
          file: "typia",
          name: "IValidation",
          arguments: [
            ts.factory.createTypeReferenceNode(
              props.name ??
                TypeFactory.getFullName({
                  checker: props.context.checker,
                  type: props.type,
                }),
            ),
          ],
        }),
        undefined,
        ts.factory.createBlock(
          [
            StatementFactory.constant({
              name: "result",
              value: ts.factory.createCallExpression(
                ts.factory.createIdentifier("__validate"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            }),
            ts.factory.createIfStatement(
              ts.factory.createIdentifier("result.success"),
              ts.factory.createExpressionStatement(
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("__prune"),
                  undefined,
                  [ts.factory.createIdentifier("input")],
                ),
              ),
            ),
            ts.factory.createReturnStatement(
              ts.factory.createIdentifier("result"),
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
