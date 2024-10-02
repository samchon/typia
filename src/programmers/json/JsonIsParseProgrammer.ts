import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";

export namespace JsonIsParseProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const is: FeatureProgrammer.IDecomposed = IsProgrammer.decompose({
      ...props,
      context: {
        ...props.context,
        options: {
          ...props.context.options,
          functional: false,
          numeric: false,
        },
      },
      config: {
        equals: false,
      },
    });
    return {
      functions: is.functions,
      statements: [
        ...is.statements,
        StatementFactory.constant({
          name: "__is",
          value: is.arrow,
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("string"))],
        ts.factory.createUnionTypeNode([
          ts.factory.createImportTypeNode(
            ts.factory.createLiteralTypeNode(
              ts.factory.createStringLiteral("typia"),
            ),
            undefined,
            ts.factory.createIdentifier("Primitive"),
            [
              ts.factory.createTypeReferenceNode(
                props.name ??
                  TypeFactory.getFullName({
                    checker: props.context.checker,
                    type: props.type,
                  }),
              ),
            ],
            false,
          ),
          ts.factory.createTypeReferenceNode("null"),
        ]),
        undefined,
        ts.factory.createBlock([
          ts.factory.createExpressionStatement(
            ts.factory.createBinaryExpression(
              ts.factory.createIdentifier("input"),
              ts.SyntaxKind.EqualsToken,
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("JSON.parse"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createConditionalExpression(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__is"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
              undefined,
              ts.factory.createAsExpression(
                ts.factory.createIdentifier("input"),
                TypeFactory.keyword("any"),
              ),
              undefined,
              ts.factory.createNull(),
            ),
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
