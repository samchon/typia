import ts from "typescript";

import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { HttpFormDataProgrammer } from "./HttpFormDataProgrammer";

export namespace HttpValidateFormDataProgrammer {
  export const decompose = (props: {
    project: IProject;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const validate = ValidateProgrammer.decompose({
      ...props,
      project: {
        ...props.project,
        options: {
          ...props.project.options,
          functional: false,
          numeric: false,
        },
      },
      equals: false,
    });
    const decode = HttpFormDataProgrammer.decompose(props);
    return {
      functions: {
        ...validate.functions,
        ...decode.functions,
      },
      statements: [
        ...validate.statements,
        StatementFactory.constant("__validate", validate.arrow),
        StatementFactory.constant("__decode", decode.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        decode.arrow.parameters,
        ts.factory.createTypeReferenceNode("typia.IValidation", [
          decode.arrow.type ?? TypeFactory.keyword("any"),
        ]),
        undefined,
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("__validate"),
          undefined,
          [
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("__decode"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
          ],
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
        modulo,
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
