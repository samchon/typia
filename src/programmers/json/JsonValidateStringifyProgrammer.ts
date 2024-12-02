import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { JsonStringifyProgrammer } from "./JsonStringifyProgrammer";

export namespace JsonValidateStringifyProgrammer {
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
        },
      });
    const stringify: FeatureProgrammer.IDecomposed =
      JsonStringifyProgrammer.decompose({
        ...props,
        validated: true,
      });
    return {
      functions: {
        ...validate.functions,
        ...stringify.functions,
      },
      statements: [
        ...validate.statements,
        ...stringify.statements,
        StatementFactory.constant({
          name: "__validate",
          value: validate.arrow,
        }),
        StatementFactory.constant({
          name: "__stringify",
          value: stringify.arrow,
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
            stringify.arrow.type ??
              ts.factory.createTypeReferenceNode("string"),
          ],
        }),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant({
            name: "result",
            value: ts.factory.createAsExpression(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__validate"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
              TypeFactory.keyword("any"),
            ),
          }),
          ts.factory.createIfStatement(
            ts.factory.createIdentifier("result.success"),
            ts.factory.createExpressionStatement(
              ts.factory.createBinaryExpression(
                ts.factory.createIdentifier("result.data"),
                ts.SyntaxKind.EqualsToken,
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("__stringify"),
                  undefined,
                  [ts.factory.createIdentifier("input")],
                ),
              ),
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("result"),
          ),
        ]),
      ),
    };
  };

  export const write = (props: IProgrammerProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      context: props.context,
      modulo: props.modulo,
      functor,
      type: props.type,
      name: props.name,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };
}
