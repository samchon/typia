import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { JsonStringifyProgrammer } from "./JsonStringifyProgrammer";

export namespace JsonIsStringifyProgrammer {
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
        context: {
          ...props.context,
          options: {
            ...props.context.options,
            functional: false,
            numeric: true,
          },
        },
        validated: true,
      });
    return {
      functions: {
        ...is.functions,
        ...stringify.functions,
      },
      statements: [
        ...is.statements,
        ...stringify.statements,
        StatementFactory.constant("__is", is.arrow),
        StatementFactory.constant("__stringify", stringify.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createUnionTypeNode([
          stringify.arrow.type ?? TypeFactory.keyword("string"),
          ts.factory.createLiteralTypeNode(ts.factory.createNull()),
        ]),
        undefined,
        ts.factory.createConditionalExpression(
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("__is"),
            undefined,
            [ts.factory.createIdentifier("input")],
          ),
          undefined,
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("__stringify"),
            undefined,
            [ts.factory.createIdentifier("input")],
          ),
          undefined,
          ts.factory.createNull(),
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
