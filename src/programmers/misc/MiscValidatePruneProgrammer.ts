import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { MiscPruneProgrammer } from "./MiscPruneProgrammer";

export namespace MiscValidatePruneProgrammer {
  export const decompose = (props: {
    project: IProject;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const validate: FeatureProgrammer.IDecomposed =
      ValidateProgrammer.decompose({
        ...props,
        equals: false,
      });
    const prune: FeatureProgrammer.IDecomposed = MiscPruneProgrammer.decompose({
      ...props,
      validated: true,
    });
    return {
      functions: {
        ...validate.functions,
        ...prune.functions,
      },
      statements: [
        ...validate.statements,
        ...prune.statements,
        StatementFactory.constant("__validate", validate.arrow),
        StatementFactory.constant("__prune", prune.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createTypeReferenceNode(
          `typia.IValidation<${
            props.name ??
            TypeFactory.getFullName(props.project.checker)(props.type)
          }>`,
        ),
        undefined,
        ts.factory.createBlock(
          [
            StatementFactory.constant(
              "result",
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__validate"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
            ts.factory.createIfStatement(
              ts.factory.createIdentifier("result.success"),
              ts.factory.createExpressionStatement(
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("__prune"),
                  undefined,
                  [ts.factory.createIdentifier("input")],
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
