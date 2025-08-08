import ts from "typescript";

import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";

export namespace MiscClassTransformProgrammer {
  export const decompose = (props: {
    validated: boolean;
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const config: FeatureProgrammer.IConfig = configure(props);
    if (props.validated === false)
      config.addition = (collection) =>
        IsProgrammer.write_function_statements({
          context: props.context,
          functor: props.functor,
          collection,
        });
    const composed: FeatureProgrammer.IComposed = FeatureProgrammer.compose({
      ...props,
      config,
    });
    return {
      functions: composed.functions,
      statements: composed.statements,
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        composed.parameters,
        composed.response,
        undefined,
        composed.body,
      ),
    };
  };

  export const write = (props: IProgrammerProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      validated: false,
      functor,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };

  const configure = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
  }): FeatureProgrammer.IConfig => {
    const config: FeatureProgrammer.IConfig = {
      types: {
        input: (type, name) =>
          ts.factory.createTypeReferenceNode(
            name ??
              TypeFactory.getFullName({ checker: props.context.checker, type }),
          ),
        output: (type, name) =>
          ts.factory.createTypeReferenceNode(
            name ??
              TypeFactory.getFullName({ checker: props.context.checker, type }),
          ),
      },
      prefix: PREFIX,
      trace: false,
      path: false,
      initializer,
      decoder: (next) =>
        decode({
          context: props.context,
          input: next.input,
          metadata: next.metadata,
        }),
      objector: {
        checker: () =>
          ts.factory.createBinaryExpression(
            ts.factory.createBinaryExpression(
              ts.factory.createStringLiteral("object"),
              ts.factory.createToken(ts.SyntaxKind.EqualsEqualsEqualsToken),
              ts.factory.createTypeOfExpression(ts.factory.createIdentifier("$input"))
            ),
            ts.factory.createToken(ts.SyntaxKind.AmpersandAmpersandToken),
            ts.factory.createBinaryExpression(
              ts.factory.createNull(),
              ts.factory.createToken(ts.SyntaxKind.ExclamationEqualsEqualsToken),
              ts.factory.createIdentifier("$input")
            )
          ),
        decoder: () => ts.factory.createIdentifier("$input"),
        joiner: () => ts.factory.createIdentifier("$input"),
        unionizer: () => ts.factory.createIdentifier("$input"),
        failure: () => ts.factory.createThrowStatement(
          ts.factory.createNewExpression(
            ts.factory.createIdentifier("Error"),
            undefined,
            [ts.factory.createStringLiteral("Failed to transform class")]
          )
        ),
      },
      generator: {
        arrays: () => [],
        tuples: () => [],
      },
    };
    return config;
  };

  const initializer = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
  }) => {
    const collection: MetadataCollection = new MetadataCollection({
      replace: MetadataCollection.replace,
    });
    const result = MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        escape: false,
        constant: true,
        absorb: true,
      },
      collection,
      type: props.type,
    });
    if (result.success === false)
      throw new TransformerError({
        code: `typia.misc.classTransform`,
        message: `unable to transform the unknown typed value.`,
      });
    if (result.data.any === true)
      throw new TransformerError({
        code: `typia.misc.classTransform`,
        message: `unable to transform the unknown typed value.`,
      });
    
    return {
      collection,
      metadata: result.data,
    };
  };

  const decode = (props: {
    context: ITypiaContext;
    metadata: Metadata;
    input: ts.Expression;
  }): ts.Expression => {
    // For now, just return a simple object transformation
    // This is a minimal implementation to get the structure working
    return ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(
        ts.factory.createIdentifier("Object"),
        "assign"
      ),
      undefined,
      [
        ts.factory.createObjectLiteralExpression([]),
        props.input
      ]
    );
  };
}

const PREFIX = "$ct";