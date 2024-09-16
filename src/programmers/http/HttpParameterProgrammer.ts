import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { TransformerError } from "../../transformers/TransformerError";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { HttpMetadataUtil } from "../helpers/HttpMetadataUtil";

export namespace HttpParameterProgrammer {
  export const write = (props: IProgrammerProps): ts.ArrowFunction => {
    const result = MetadataFactory.analyze(
      props.context.checker,
      props.context.transformer,
    )({
      escape: false,
      constant: true,
      absorb: true,
      validate,
    })(new MetadataCollection())(props.type);
    if (result.success === false)
      throw TransformerError.from(props.modulo.getText())(result.errors);

    const atomic = [...HttpMetadataUtil.atomics(result.data)][0]!;
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const block: ts.Statement[] = [
      StatementFactory.constant(
        "assert",
        AssertProgrammer.write({
          ...props,
          context: {
            ...props.context,
            options: {
              numeric: true,
            },
          },
          config: {
            equals: false,
            guard: false,
          },
        }),
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
        props.name ??
          TypeFactory.getFullName(props.context.checker)(props.type),
      ),
      undefined,
      ts.factory.createBlock(
        [...importer.declare(props.modulo), ...block],
        true,
      ),
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
