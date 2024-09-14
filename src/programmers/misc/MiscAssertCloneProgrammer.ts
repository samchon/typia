import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { MiscCloneProgrammer } from "./MiscCloneProgrammer";

export namespace MiscAssertCloneProgrammer {
  export const decompose = (props: {
    project: ITypiaContext;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
    init: ts.Expression | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const assert: FeatureProgrammer.IDecomposed = AssertProgrammer.decompose({
      ...props,
      equals: false,
      guard: false,
    });
    const clone: FeatureProgrammer.IDecomposed = MiscCloneProgrammer.decompose({
      ...props,
      validated: true,
    });
    return {
      functions: {
        ...assert.functions,
        ...clone.functions,
      },
      statements: [
        ...assert.statements,
        ...clone.statements,
        StatementFactory.constant("__assert", assert.arrow),
        StatementFactory.constant("__clone", clone.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
          AssertProgrammer.Guardian.parameter(props.init),
        ],
        clone.arrow.type,
        undefined,
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("__clone"),
          undefined,
          [
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("__assert"),
              undefined,
              [
                ts.factory.createIdentifier("input"),
                AssertProgrammer.Guardian.identifier(),
              ],
            ),
          ],
        ),
      ),
    };
  };

  export const write =
    (project: ITypiaContext) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string, init?: ts.Expression): ts.CallExpression => {
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const result: FeatureProgrammer.IDecomposed = decompose({
        project,
        importer,
        type,
        name,
        init,
      });
      return FeatureProgrammer.writeDecomposed({
        modulo,
        importer,
        result,
      });
    };
}
