import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { ProtobufEncodeProgrammer } from "./ProtobufEncodeProgrammer";

export namespace ProtobufAssertEncodeProgrammer {
  export const decompose = (props: {
    project: IProject;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
    init: ts.Expression | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const assert: FeatureProgrammer.IDecomposed = AssertProgrammer.decompose({
      ...props,
      project: {
        ...props.project,
        options: {
          ...props.project.options,
          functional: false,
          numeric: true,
        },
      },
      equals: false,
      guard: false,
    });
    const encode: FeatureProgrammer.IDecomposed =
      ProtobufEncodeProgrammer.decompose(props);
    return {
      functions: {
        ...assert.functions,
        ...encode.functions,
      },
      statements: [
        ...assert.statements,
        ...encode.statements,
        StatementFactory.constant("__assert", assert.arrow),
        StatementFactory.constant("__encode", encode.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
          AssertProgrammer.Guardian.parameter(props.init),
        ],
        encode.arrow.type,
        undefined,
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("__encode"),
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
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string, init?: ts.Expression): ts.CallExpression => {
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const result: FeatureProgrammer.IDecomposed = decompose({
        project,
        modulo,
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
