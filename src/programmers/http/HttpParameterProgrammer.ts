import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IProject } from "../../transformers/IProject";
import { TransformerError } from "../../transformers/TransformerError";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporeter";
import { HttpMetadataUtil } from "../helpers/HttpMetadataUtil";

export namespace HttpParameterProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string): ts.ArrowFunction => {
      const result = MetadataFactory.analyze(
        project.checker,
        project.context,
      )({
        escape: false,
        constant: true,
        absorb: true,
        validate,
      })(new MetadataCollection())(type);
      if (result.success === false)
        throw TransformerError.from(modulo.getText())(result.errors);

      const atomic = [...HttpMetadataUtil.atomics(result.data)][0]!;
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const block: ts.Statement[] = [
        StatementFactory.constant(
          "assert",
          AssertProgrammer.write({
            ...project,
            options: {
              numeric: true,
            },
          })(modulo)(false)(type, name),
        ),
        StatementFactory.constant(
          "value",
          ts.factory.createCallExpression(importer.use(atomic), undefined, [
            ts.factory.createIdentifier("input"),
          ]),
        ),
        ts.factory.createReturnStatement(
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("assert"),
            undefined,
            [ts.factory.createIdentifier("value")],
          ),
        ),
      ];

      return ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "input",
            ts.factory.createTypeReferenceNode("string"),
          ),
        ],
        ts.factory.createTypeReferenceNode(
          name ?? TypeFactory.getFullName(project.checker)(type),
        ),
        undefined,
        ts.factory.createBlock([...importer.declare(modulo), ...block], true),
      );
    };

  export const validate = (meta: Metadata): string[] => {
    const errors: string[] = [];
    const insert = (msg: string) => errors.push(msg);

    if (meta.any) insert("do not allow any type");
    if (meta.isRequired() === false) insert("do not allow undefindable type");

    const atomics = HttpMetadataUtil.atomics(meta);
    const expected: number =
      meta.atomics.length +
      meta.templates.length +
      meta.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0);
    if (meta.size() !== expected || atomics.size === 0)
      insert("only atomic or constant types are allowed");
    if (atomics.size > 1) insert("do not allow union type");

    return errors;
  };
}
