import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { ProtobufEncodeProgrammer } from "./ProtobufEncodeProgrammer";

export namespace ProtobufIsEncodeProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const is: FeatureProgrammer.IDecomposed = IsProgrammer.decompose({
      ...props,
      context: {
        ...props.context,
        options: {
          ...props.context.options,
          functional: false,
          numeric: true,
        },
      },
      config: {
        equals: false,
      },
    });
    const encode: FeatureProgrammer.IDecomposed =
      ProtobufEncodeProgrammer.decompose(props);
    return {
      functions: {
        ...is.functions,
        ...encode.functions,
      },
      statements: [
        ...is.statements,
        ...encode.statements,
        StatementFactory.constant({
          name: "__is",
          value: is.arrow,
        }),
        StatementFactory.constant({
          name: "__encode",
          value: encode.arrow,
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createUnionTypeNode([
          encode.arrow.type ?? ts.factory.createTypeReferenceNode("Uint8Array"),
          ts.factory.createTypeReferenceNode("null"),
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
            ts.factory.createIdentifier("__encode"),
            undefined,
            [ts.factory.createIdentifier("input")],
          ),
          undefined,
          ts.factory.createNull(),
        ),
      ),
    };
  };

  export const write = (props: IProgrammerProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      functor,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };
}
