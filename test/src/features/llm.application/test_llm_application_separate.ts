import { ILlmApplication, LlmTypeChecker } from "@samchon/openapi";
import { ILlmFunction } from "@samchon/openapi/lib/structures/ILlmFunction";
import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_llm_application_separate = (): void => {
  const app: ILlmApplication = typia.llm.application<BbsArticleApplication>({
    separate: (schema) =>
      LlmTypeChecker.isString(schema) && schema.contentMediaType !== undefined,
  });
  const func: ILlmFunction = app.functions[0]!;
  TestValidator.equals("separated.human")(func.separated?.human)([
    {
      index: 0,
      schema: {
        type: "object",
        properties: {
          file: {
            type: "string",
            format: "uri",
            contentMediaType: "*/*",
          },
        },
        nullable: false,
        required: ["file"],
      },
    },
  ]);
  TestValidator.equals("separated.llm")(func.separated?.llm)([
    {
      index: 0,
      schema: {
        type: "object",
        properties: {
          title: {
            type: "string",
          },
          body: {
            type: "string",
          },
        },
        nullable: false,
        required: ["title", "body"],
      },
    },
  ]);
};

interface IBbsArticle extends IBbsArticle.ICreate {
  id: string & tags.Format<"uuid">;
  created_at: string & tags.Format<"date-time">;
}
namespace IBbsArticle {
  export interface ICreate {
    title: string;
    body: string;
    file: string & tags.Format<"uri"> & tags.ContentMediaType<"*/*">;
  }
}

interface BbsArticleApplication {
  create(input: IBbsArticle.ICreate): Promise<IBbsArticle>;
}
