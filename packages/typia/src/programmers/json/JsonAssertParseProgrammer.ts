import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { JsonMetadataFactory } from "../../factories/JsonMetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";

export namespace JsonAssertParseProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
    init: ts.Expression | undefined;
  }): FeatureProgrammer.IDecomposed => {
    JsonMetadataFactory.analyze({
      method: props.functor.method,
      checker: props.context.checker,
      transformer: props.context.transformer,
      type: props.type,
    });
    const assert: FeatureProgrammer.IDecomposed = AssertProgrammer.decompose({
      ...props,
      context: {
        ...props.context,
        options: {
          ...props.context.options,
          functional: false,
          numeric: false,
        },
      },
      config: {
        equals: false,
        guard: false,
      },
    });
    return {
      functions: assert.functions,
      statements: [
        ...assert.statements,
        StatementFactory.constant({
          name: "__assert",
          value: assert.arrow,
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("string")),
          AssertProgrammer.Guardian.parameter({
            context: props.context,
            init: props.init,
          }),
        ],
        props.context.importer.type({
          file: "typia",
          name: "Primitive",
          arguments: [
            ts.factory.createTypeReferenceNode(
              props.name ??
                TypeFactory.getFullName({
                  checker: props.context.checker,
                  type: props.type,
                }),
            ),
          ],
        }),
        undefined,
        ts.factory.createAsExpression(
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("__assert"),
            undefined,
            [
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("JSON.parse"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
              AssertProgrammer.Guardian.identifier(),
            ],
          ),
          TypeFactory.keyword("any"),
        ),
      ),
    };
  };

  export const write = (props: IProgrammerProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      context: props.context,
      functor,
      type: props.type,
      name: props.name,
      init: props.init,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };
}
