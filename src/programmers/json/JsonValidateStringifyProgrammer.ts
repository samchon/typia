import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { JsonStringifyProgrammer } from "./JsonStringifyProgrammer";

export namespace JsonValidateStringifyProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
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
        ts.factory.createTypeReferenceNode("typia.IValidation", [
          stringify.arrow.type ?? ts.factory.createTypeReferenceNode("string"),
        ]),
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
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      context: props.context,
      modulo: props.modulo,
      importer,
      type: props.type,
      name: props.name,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };
}
