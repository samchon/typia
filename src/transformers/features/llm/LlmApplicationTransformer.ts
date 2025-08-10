import { ILlmApplication, ILlmSchema } from "@samchon/openapi";
import ts from "typescript";

import { ExpressionFactory } from "../../../factories/ExpressionFactory";
import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";
import { StatementFactory } from "../../../factories/StatementFactory";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { LlmApplicationProgrammer } from "../../../programmers/llm/LlmApplicationProgrammer";
import { LlmModelPredicator } from "../../../programmers/llm/LlmModelPredicator";

import { ValidationPipe } from "../../../typings/ValidationPipe";

import { ITransformProps } from "../../ITransformProps";
import { ITypiaContext } from "../../ITypiaContext";
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
        arguments: [
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(dec.application.model),
          ),
        ],
      }),
    );
    if (!props.expression.arguments?.[0]) return literal;
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
              model: dec.application.model,
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
    application: ILlmApplication<ILlmSchema.Model>;
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
    const model: ILlmSchema.Model = LlmModelPredicator.getModel({
      checker: props.context.checker,
      method,
      node: props.expression.typeArguments[1],
    });
    const config:
      | Partial<
          ILlmSchema.IConfig & {
            equals: boolean;
          }
        >
      | undefined = LlmModelPredicator.getConfig({
      context: props.context,
      method,
      model,
      node: props.expression.typeArguments[2],
    });
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);

    // VALIDATE TYPE
    const analyze = (validate: boolean): Metadata => {
      const result: ValidationPipe<Metadata, MetadataFactory.IError> =
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
                ? LlmApplicationProgrammer.validate({
                    model,
                    config,
                  })
                : undefined,
          },
          collection: new MetadataCollection({
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
      application: LlmApplicationProgrammer.write({
        model,
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
    model: ILlmSchema.Model;
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
                ts.factory.createIdentifier("IOptions"),
              ),
              [
                ts.factory.createLiteralTypeNode(
                  ts.factory.createStringLiteral(props.model),
                ),
              ],
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
