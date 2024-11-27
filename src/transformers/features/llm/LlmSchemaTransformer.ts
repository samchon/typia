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
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);
    const collection: MetadataCollection = new MetadataCollection({
      replace: MetadataCollection.replace,
    });
    const result: ValidationPipe<Metadata, MetadataFactory.IError> =
      MetadataFactory.analyze({
        checker: props.context.checker,
        transformer: props.context.transformer,
        options: {
          escape: true,
          constant: true,
          absorb: false,
          validate: LlmSchemaProgrammer.validate(model),
        },
        collection,
        type,
      });
    if (result.success === false)
      throw TransformerError.from({
        code: "typia.llm.schema",
        errors: result.errors,
      });

    // GENERATE LLM SCHEMA
    const out: LlmSchemaProgrammer.IOutput<any> = LlmSchemaProgrammer.write({
      model,
      metadata: result.data,
      config: LlmModelPredicator.getConfig({
        context: props.context,
        method: "schema",
        model,
        node: props.expression.typeArguments[2],
      }),
    });
    const schemaTypeNode = ts.factory.createTypeReferenceNode(
      props.context.importer.instance({
        name: "ILlmSchema",
        file: "@samchon/openapi",
        type: true,
        alias: "__ILlmSchema",
      }).text,
      [ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(model))],
    );
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
      [props.expression.arguments[0]!],
    );
  };
}
