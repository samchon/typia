import {
  ITypiaContext,
  LlmApplicationProgrammer,
  LlmMetadataFactory,
  MetadataCollection,
  MetadataFactory,
  MetadataSchema,
} from "@typia/core";
import { ILlmApplication, ILlmSchema, ValidationPipe } from "@typia/interface";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmApplicationTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.llm.application",
        message: "no generic argument.",
      });
    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return props.expression;

    // GET CONFIG
    const config:
      | Partial<
          ILlmSchema.IConfig & {
            equals: boolean;
          }
        >
      | undefined = LlmMetadataFactory.getConfig({
      context: props.context,
      method: "application",
      node: props.expression.typeArguments[1],
    });
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);

    // VALIDATE TYPE
    const analyze = (validate: boolean): MetadataSchema => {
      const result: ValidationPipe<MetadataSchema, MetadataFactory.IError> =
        MetadataFactory.analyze({
          checker: props.context.checker,
          transformer: props.context.transformer,
          options: {
            absorb: validate,
            escape: true,
            constant: true,
            functional: true,
            validate:
              validate === true
                ? (metadata, explore) =>
                    LlmApplicationProgrammer.validate({
                      config,
                      metadata,
                      explore,
                    })
                : undefined,
          },
          components: new MetadataCollection({
            replace: MetadataCollection.replace,
          }),
          type,
        });
      if (result.success === false)
        throw TransformerError.from({
          code: "typia.llm.application",
          errors: result.errors,
        });
      return result.data;
    };
    analyze(true);

    // GENERATE LLM APPLICATION
    return LlmApplicationProgrammer.write({
      context: props.context,
      modulo: props.modulo,
      metadata: analyze(false),
      name: top.getFullText().trim(),
      config,
    });
  };

  /** @internal */
  export const decompose = (
    method: string,
    props: ITransformProps,
  ): {
    application: ILlmApplication.__IPrimitive;
    type: ts.Type;
    node: ts.TypeNode;
    config:
      | Partial<
          ILlmSchema.IConfig & {
            equals: boolean;
          }
        >
      | undefined;
  } | null => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: `typia.llm.${method}`,
        message: "no generic argument.",
      });
    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return null;

    // GET TYPE
    const config:
      | Partial<
          ILlmSchema.IConfig & {
            equals: boolean;
          }
        >
      | undefined = LlmMetadataFactory.getConfig({
      context: props.context,
      method,
      node: props.expression.typeArguments[1],
    });
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);

    // VALIDATE TYPE
    const analyze = (validate: boolean): MetadataSchema => {
      const result: ValidationPipe<MetadataSchema, MetadataFactory.IError> =
        MetadataFactory.analyze({
          checker: props.context.checker,
          transformer: props.context.transformer,
          options: {
            absorb: validate,
            escape: true,
            constant: true,
            functional: true,
            validate:
              validate === true
                ? (metadata, explore) =>
                    LlmApplicationProgrammer.validate({
                      config,
                      metadata,
                      explore,
                    })
                : undefined,
          },
          components: new MetadataCollection({
            replace: MetadataCollection.replace,
          }),
          type,
        });
      if (result.success === false)
        throw TransformerError.from({
          code: `typia.llm.${method}`,
          errors: result.errors,
        });
      return result.data;
    };
    analyze(true);

    // GENERATE LLM APPLICATION
    return {
      application: LlmApplicationProgrammer.writeApplication({
        context: props.context,
        modulo: props.modulo,
        metadata: analyze(false),
        config,
        name: top.getFullText().trim(),
      }),
      node: top,
      type,
      config,
    };
  };

  export const getConfigArgument = (props: {
    context: ITypiaContext;
    argument: ts.Expression;
    equals?: boolean | undefined;
  }) => {
    const satisfiesTypeNode: ts.TypeNode = ts.factory.createTypeReferenceNode(
      ts.factory.createIdentifier("Partial"),
      [
        ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier("Pick"),
          [
            ts.factory.createImportTypeNode(
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral("typia"),
              ),
              undefined,
              ts.factory.createQualifiedName(
                ts.factory.createIdentifier("ILlmApplication"),
                ts.factory.createIdentifier("IConfig"),
              ),
              undefined,
              false,
            ),
            ts.factory.createUnionTypeNode([
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral("validate"),
              ),
            ]),
          ],
        ),
      ],
    );
    return ts.factory.createObjectLiteralExpression(
      [
        ts.factory.createSpreadAssignment(
          ts.factory.createSatisfiesExpression(
            props.argument,
            satisfiesTypeNode,
          ),
        ),
        ts.factory.createPropertyAssignment(
          "equals",
          props.equals === true
            ? ts.factory.createTrue()
            : ts.factory.createFalse(),
        ),
      ],
      true,
    );
  };
}
