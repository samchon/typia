import { ILlmApplication } from "@samchon/openapi";
import ts from "typescript";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { LlmApplicationProgrammer } from "../../../programmers/llm/LlmApplicationProgrammer";

import { ValidationPipe } from "../../../typings/ValidationPipe";

import { IProject } from "../../IProject";
import { TransformerError } from "../../TransformerError";

export namespace LlmApplicationTransformer {
  export const transform =
    (project: IProject) =>
    (expression: ts.CallExpression): ts.Expression => {
      // GET GENERIC ARGUMENT
      if (!expression.typeArguments?.length)
        throw new TransformerError({
          code: "typia.llm.schema",
          message: "no generic argument.",
        });

      const top: ts.Node = expression.typeArguments[0]!;
      if (ts.isTypeNode(top) === false) return expression;

      // GET TYPE
      const type: ts.Type = project.checker.getTypeFromTypeNode(top);
      const collection: MetadataCollection = new MetadataCollection({
        replace: MetadataCollection.replace,
      });
      const result: ValidationPipe<Metadata, MetadataFactory.IError> =
        MetadataFactory.analyze(
          project.checker,
          project.context,
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
      const schema: ILlmApplication = LlmApplicationProgrammer.write(
        result.data,
      );
      return LiteralFactory.generate(schema);
    };
}
