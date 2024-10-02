import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { NotationGeneralProgrammer } from "./NotationGeneralProgrammer";

export namespace NotationValidateGeneralProgrammer {
  export interface IProps extends IProgrammerProps {
    rename: (str: string) => string;
  }

  export const decompose = (props: {
    rename: (str: string) => string;
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const validate = ValidateProgrammer.decompose({
      ...props,
      config: {
        equals: false,
      },
    });
    const notation = NotationGeneralProgrammer.decompose({
      ...props,
      validated: true,
    });
    return {
      functions: {
        ...validate.functions,
        ...notation.functions,
      },
      statements: [
        ...validate.statements,
        ...notation.statements,
        StatementFactory.constant({
          name: "__validate",
          value: validate.arrow,
        }),
        StatementFactory.constant({
          name: "__notation",
          value: notation.arrow,
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createTypeReferenceNode("typia.IValidation", [
          notation.arrow.type ?? TypeFactory.keyword("any"),
        ]),
        undefined,
        ts.factory.createBlock(
          [
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
                    ts.factory.createIdentifier("__notation"),
                    undefined,
                    [ts.factory.createIdentifier("input")],
                  ),
                ),
              ),
            ),
            ts.factory.createReturnStatement(
              ts.factory.createAsExpression(
                ts.factory.createIdentifier("result"),
                TypeFactory.keyword("any"),
              ),
            ),
          ],
          true,
        ),
      ),
    };
  };

  export const write = (props: IProps): ts.CallExpression => {
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      importer,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };
}
