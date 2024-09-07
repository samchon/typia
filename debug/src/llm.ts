import { ILlmApplication, LlmTypeChecker } from "@samchon/openapi";
import typia, { tags } from "typia";

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

const app: ILlmApplication = typia.llm.application<BbsArticleApplication>({
  separate: (schema) =>
    LlmTypeChecker.isString(schema) && schema.contentMediaType !== undefined,
});
console.log(app);
