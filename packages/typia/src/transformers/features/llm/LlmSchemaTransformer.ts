import { IdentifierFactory } from "@typia/core";
import { LiteralFactory } from "@typia/core";
import { MetadataStorage } from "@typia/core";
import { MetadataFactory } from "@typia/core";
import { LlmMetadataFactory } from "@typia/core";
import { LlmSchemaProgrammer } from "@typia/core";
import { MetadataSchema } from "@typia/core";
import { ValidationPipe } from "@typia/core";
import { ILlmSchema } from "@typia/interface";
import ts from "typescript";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmSchemaTransformer {
  export const transform = (
    props: Omit<ITransformProps, "modulo">,
  ): ts.Expression => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.llm.schema",
        message: "no generic argument.",
      });

    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return props.expression;

    // GET TYPE
    const config: Partial<ILlmSchema.IConfig> = LlmMetadataFactory.getConfig({
      context: props.context,
      method: "schema",
      node: props.expression.typeArguments[1],
    }) as Partial<ILlmSchema.IConfig>;

    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);

    // VALIDATE TYPE
    const analyze = (validate: boolean): MetadataSchema => {
      const result: ValidationPipe<MetadataSchema, MetadataFactory.IError> =
        MetadataFactory.analyze({
          checker: props.context.checker,
          transformer: props.context.transformer,
          options: {
            absorb: validate,
            constant: true,
            escape: true,
            validate:
              validate === true
                ? (metadata: MetadataSchema) =>
                    LlmSchemaProgrammer.validate({
                      config,
                      metadata,
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
          code: "typia.llm.schema",
          errors: result.errors,
        });
      return result.data;
    };
    analyze(true);

    // GENERATE LLM SCHEMA
    const out: LlmSchemaProgrammer.IOutput = LlmSchemaProgrammer.write({
      metadata: analyze(false),
      config,
    });
    const schemaTypeNode = props.context.importer.type({
      file: "@samchon/openapi",
      name: "ILlmSchema",
    });
    const literal = ts.factory.createAsExpression(
      LiteralFactory.write(out.schema),
      schemaTypeNode,
    );
    if (Object.keys(out.$defs).length === 0) return literal;
    return ts.factory.createCallExpression(
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "$defs",
            ts.factory.createTypeReferenceNode("Record", [
              ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
              schemaTypeNode,
            ]),
            undefined,
          ),
        ],
        undefined,
        undefined,
        ts.factory.createBlock(
          [
            ts.factory.createExpressionStatement(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("Object.assign"),
                undefined,
                [
                  ts.factory.createIdentifier("$defs"),
                  ts.factory.createAsExpression(
                    LiteralFactory.write(out.$defs),
                    ts.factory.createTypeReferenceNode("Record", [
                      ts.factory.createKeywordTypeNode(
                        ts.SyntaxKind.StringKeyword,
                      ),
                      schemaTypeNode,
                    ]),
                  ),
                ],
              ),
            ),
            ts.factory.createReturnStatement(literal),
          ],
          true,
        ),
      ),
      undefined,
      props.expression.arguments?.[0] !== undefined
        ? [props.expression.arguments[0]!]
        : [],
    );
  };
}
