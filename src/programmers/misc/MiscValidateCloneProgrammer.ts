import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { MiscCloneProgrammer } from "./MiscCloneProgrammer";

export namespace MiscValidateCloneProgrammer {
  export const decompose = (props: {
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
    const clone = MiscCloneProgrammer.decompose({
      ...props,
      validated: true,
    });
    return {
      functions: {
        ...validate.functions,
        ...clone.functions,
      },
      statements: [
        ...validate.statements,
        ...clone.statements,
        StatementFactory.constant({
          name: "__validate",
          value: validate.arrow,
        }),
        StatementFactory.constant({
          name: "__clone",
          value: clone.arrow,
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createTypeReferenceNode("typia.IValidation", [
          clone.arrow.type ?? TypeFactory.keyword("any"),
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
                    ts.factory.createIdentifier("__clone"),
                    undefined,
                    [ts.factory.createIdentifier("input")],
                  ),
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
