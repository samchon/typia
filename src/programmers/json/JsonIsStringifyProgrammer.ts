import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { JsonStringifyProgrammer } from "./JsonStringifyProgrammer";

export namespace JsonIsStringifyProgrammer {
  export const decompose = (props: {
    project: IProject;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const is: FeatureProgrammer.IDecomposed = IsProgrammer.decompose({
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
    });
    const stringify: FeatureProgrammer.IDecomposed =
      JsonStringifyProgrammer.decompose({
        ...props,
        project: {
          ...props.project,
          options: {
            ...props.project.options,
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

  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string): ts.CallExpression => {
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const result: FeatureProgrammer.IDecomposed = decompose({
        project,
        importer,
        type,
        name,
      });
      return FeatureProgrammer.writeDecomposed({
        modulo,
        importer,
        result,
      });
    };
}
