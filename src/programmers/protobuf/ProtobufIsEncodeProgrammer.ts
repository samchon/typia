import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { ProtobufEncodeProgrammer } from "./ProtobufEncodeProgrammer";

export namespace ProtobufIsEncodeProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
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
        StatementFactory.constant("__is", is.arrow),
        StatementFactory.constant("__encode", encode.arrow),
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
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      importer,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };
}
