import ts from "typescript";

import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { HttpFormDataProgrammer } from "./HttpFormDataProgrammer";

export namespace HttpIsFormDataProgrammer {
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
    const decode: FeatureProgrammer.IDecomposed =
      HttpFormDataProgrammer.decompose(props);
    return {
      functions: {
        ...is.functions,
        ...decode.functions,
      },
      statements: [
        ...is.statements,
        ...decode.statements,
        StatementFactory.constant("__is", is.arrow),
        StatementFactory.constant("__decode", decode.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        decode.arrow.parameters,
        ts.factory.createUnionTypeNode([
          decode.arrow.type ?? TypeFactory.keyword("any"),
          ts.factory.createTypeReferenceNode("null"),
        ]),
        undefined,
        ts.factory.createBlock(
          [
            StatementFactory.constant(
              "value",
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__decode"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
            ts.factory.createIfStatement(
              ts.factory.createPrefixUnaryExpression(
                ts.SyntaxKind.ExclamationToken,
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("__is"),
                  undefined,
                  [ts.factory.createIdentifier("value")],
                ),
              ),
              ts.factory.createReturnStatement(ts.factory.createNull()),
            ),
            ts.factory.createReturnStatement(
              ts.factory.createIdentifier("value"),
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
