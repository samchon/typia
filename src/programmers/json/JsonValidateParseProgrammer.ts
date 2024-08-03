import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";

export namespace JsonValidateParseProgrammer {
  export const decompose = (props: {
    project: IProject;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    type: ts.Type;
    name?: string;
  }): FeatureProgrammer.IDecomposed => {
    const validate: FeatureProgrammer.IDecomposed =
      ValidateProgrammer.decompose({
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
    return {
      functions: validate.functions,
      statements: [
        ...validate.statements,
        StatementFactory.constant("__validate", validate.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("string"))],
        ts.factory.createTypeReferenceNode(
          `typia.IValidation<typia.Primitive<${
            props.name ??
            TypeFactory.getFullName(props.project.checker)(props.type)
          }>>`,
        ),
        undefined,
        ts.factory.createAsExpression(
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("__validate"),
            undefined,
            [
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("JSON.parse"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ],
          ),
          ts.factory.createTypeReferenceNode("any"),
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
