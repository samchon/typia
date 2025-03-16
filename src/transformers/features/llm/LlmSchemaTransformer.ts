import { ILlmSchema } from "@samchon/openapi";
import ts from "typescript";

import { IdentifierFactory } from "../../../factories/IdentifierFactory";
import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { LlmModelPredicator } from "../../../programmers/llm/LlmModelPredicator";
import { LlmSchemaProgrammer } from "../../../programmers/llm/LlmSchemaProgrammer";

import { ValidationPipe } from "../../../typings/ValidationPipe";

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
    const model: ILlmSchema.Model = LlmModelPredicator.getModel({
      checker: props.context.checker,
      method: "schema",
      node: props.expression.typeArguments[1],
    });
    const config: Partial<ILlmSchema.IConfig> = LlmModelPredicator.getConfig({
      context: props.context,
      method: "schema",
      model,
      node: props.expression.typeArguments[2],
    }) as Partial<ILlmSchema.IConfig>;

    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);

    // VALIDATE TYPE
    const analyze = (validate: boolean): Metadata => {
      const result: ValidationPipe<Metadata, MetadataFactory.IError> =
        MetadataFactory.analyze({
          checker: props.context.checker,
          transformer: props.context.transformer,
          options: {
            absorb: validate,
            constant: true,
            escape: true,
            validate:
              validate === true
                ? LlmSchemaProgrammer.validate({
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
          code: "typia.llm.schema",
          errors: result.errors,
        });
      return result.data;
    };
    analyze(true);

    // GENERATE LLM SCHEMA
    const out: LlmSchemaProgrammer.IOutput<any> = LlmSchemaProgrammer.write({
      model,
      metadata: analyze(false),
      config,
    });
    const schemaTypeNode = props.context.importer.type({
      file: "@samchon/openapi",
      name: "ILlmSchema",
      arguments: [
        ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(model)),
      ],
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
            "props",
            ts.factory.createTypeLiteralNode([
              ts.factory.createPropertySignature(
                undefined,
                ts.factory.createIdentifier("$defs"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createUnionTypeNode([
                  ts.factory.createTypeReferenceNode("Record", [
                    ts.factory.createKeywordTypeNode(
                      ts.SyntaxKind.StringKeyword,
                    ),
                    schemaTypeNode,
                  ]),
                  ts.factory.createKeywordTypeNode(
                    ts.SyntaxKind.UndefinedKeyword,
                  ),
                ]),
              ),
            ]),
            undefined,
          ),
        ],
        undefined,
        undefined,
        ts.factory.createBlock(
          [
            ts.factory.createIfStatement(
              ts.factory.createStrictInequality(
                ts.factory.createIdentifier("undefined"),
                IdentifierFactory.access(
                  ts.factory.createIdentifier("props"),
                  "$defs",
                  true,
                ),
              ),
              ts.factory.createExpressionStatement(
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("Object.assign"),
                  undefined,
                  [
                    IdentifierFactory.access(
                      ts.factory.createIdentifier("props"),
                      "$defs",
                    ),
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
            ),
            ts.factory.createReturnStatement(literal),
          ],
          true,
        ),
      ),
      undefined,
      [props.expression.arguments[0]!],
    );
  };
}
