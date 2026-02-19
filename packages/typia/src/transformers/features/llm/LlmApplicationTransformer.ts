import {
  ExpressionFactory,
  ITypiaContext,
  LiteralFactory,
  LlmApplicationProgrammer,
  LlmMetadataFactory,
  MetadataFactory,
  MetadataSchema,
  MetadataStorage,
  StatementFactory,
  ValidationPipe,
} from "@typia/core";
import { ILlmApplication, ILlmSchema } from "@typia/interface";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmApplicationTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    const dec = decompose("application", props);
    if (dec === null) return props.expression;

    const literal: ts.Expression = ts.factory.createAsExpression(
      LiteralFactory.write(dec.application),
      props.context.importer.type({
        file: "@samchon/openapi",
        name: "ILlmApplication",
        arguments: [dec.node],
      }),
    );
    if (props.expression.arguments?.[0] === undefined) return literal;
    return ExpressionFactory.selfCall(
      ts.factory.createBlock(
        [
          StatementFactory.constant({
            name: "application",
            value: literal,
          }),
          ts.factory.createExpressionStatement(
            finalize({
              context: props.context,
              value: ts.factory.createIdentifier("application"),
              argument: props.expression.arguments[0]!,
              equals: dec.config?.equals,
            }),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("application"),
          ),
        ],
        true,
      ),
    );
  };

  /** @internal */
  export const decompose = (
    method: string,
    props: ITransformProps,
  ): {
    application: ILlmApplication;
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
          components: new MetadataStorage({
            replace: MetadataStorage.replace,
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
      application: LlmApplicationProgrammer.write({
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

  export const finalize = (props: {
    context: ITypiaContext;
    value: ts.Expression;
    argument: ts.Expression;
    equals?: boolean;
  }) => {
    const satisfiesTypeNode: ts.TypeNode = ts.factory.createTypeReferenceNode(
      ts.factory.createIdentifier("Partial"),
      [
        ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier("Pick"),
          [
            ts.factory.createImportTypeNode(
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral("@samchon/openapi"),
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
                ts.factory.createStringLiteral("separate"),
              ),
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral("validate"),
              ),
            ]),
          ],
        ),
      ],
    );
    return ts.factory.createCallExpression(
      props.context.importer.internal("llmApplicationFinalize"),
      undefined,
      [
        props.value,
        ts.factory.createObjectLiteralExpression(
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
        ),
      ],
    );
  };
}
