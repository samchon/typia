import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { MiscPruneProgrammer } from "./MiscPruneProgrammer";

export namespace MiscIsPruneProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const is: FeatureProgrammer.IDecomposed = IsProgrammer.decompose({
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
        ...is.functions,
        ...prune.functions,
      },
      statements: [
        ...is.statements,
        ...prune.statements,
        StatementFactory.constant("__is", is.arrow),
        StatementFactory.constant("__prune", prune.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        is.arrow.type,
        undefined,
        ts.factory.createBlock(
          [
            ts.factory.createIfStatement(
              ts.factory.createEquality(
                ts.factory.createFalse(),
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("__is"),
                  undefined,
                  [ts.factory.createIdentifier("input")],
                ),
              ),
              ts.factory.createReturnStatement(ts.factory.createFalse()),
            ),
            ts.factory.createExpressionStatement(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__prune"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
            ts.factory.createReturnStatement(ts.factory.createTrue()),
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
