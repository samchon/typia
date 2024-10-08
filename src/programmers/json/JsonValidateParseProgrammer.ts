import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";

export namespace JsonValidateParseProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const validate: FeatureProgrammer.IDecomposed =
      ValidateProgrammer.decompose({
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
        },
      });
    return {
      functions: validate.functions,
      statements: [
        ...validate.statements,
        StatementFactory.constant({
          name: "__validate",
          value: validate.arrow,
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("string"))],
        props.context.importer.type({
          file: "typia",
          name: "IValidation",
          arguments: [
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
          ],
        }),
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

  export const write = (props: IProgrammerProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      context: props.context,
      modulo: props.modulo,
      functor,
      type: props.type,
      name: props.name,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };
}
