import { ILlmApplication } from "@samchon/openapi";
import ts from "typescript";

import { ExpressionFactory } from "../../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../../factories/IdentifierFactory";
import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";
import { StatementFactory } from "../../../factories/StatementFactory";
import { TypeFactory } from "../../../factories/TypeFactory";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { LlmApplicationProgrammer } from "../../../programmers/llm/LlmApplicationProgrammer";

import { ValidationPipe } from "../../../typings/ValidationPipe";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace LlmApplicationTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // GET GENERIC ARGUMENT
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.llm.schema",
        message: "no generic argument.",
      });

    const top: ts.Node = props.expression.typeArguments[0]!;
    if (ts.isTypeNode(top) === false) return props.expression;

    // GET TYPE
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(top);
    const collection: MetadataCollection = new MetadataCollection({
      replace: MetadataCollection.replace,
    });
    const result: ValidationPipe<Metadata, MetadataFactory.IError> =
      MetadataFactory.analyze(
        props.context.checker,
        props.context.transformer,
      )({
        escape: true,
        constant: true,
        absorb: false,
        functional: true,
        validate: LlmApplicationProgrammer.validate,
      })(collection)(type);
    if (result.success === false)
      throw TransformerError.from("typia.llm.application")(result.errors);

    // GENERATE LLM APPLICATION
    const schema: ILlmApplication = LlmApplicationProgrammer.write(result.data);

    return ExpressionFactory.selfCall(
      ts.factory.createBlock(
        [
          StatementFactory.constant("app", LiteralFactory.generate(schema)),
          ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(
              ts.factory.createAsExpression(
                IdentifierFactory.access(props.modulo)("finalize"),
                TypeFactory.keyword("any"),
              ),
              undefined,
              [
                ts.factory.createIdentifier("app"),
                ...(props.expression.arguments?.[0]
                  ? [props.expression.arguments[0]]
                  : []),
              ],
            ),
          ),
          ts.factory.createReturnStatement(ts.factory.createIdentifier("app")),
        ],
        true,
      ),
    );
  };
}
