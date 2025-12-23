import { ILlmApplication, ILlmSchema, LlmTypeChecker } from "@samchon/openapi";
import typia from "typia";

import { BbsArticleService } from "./BbsArticleService";

const app: ILlmApplication = typia.llm.application<BbsArticleService>({
  separate: (schema: ILlmSchema) =>
    LlmTypeChecker.isString(schema) && schema.contentMediaType !== undefined,
});
console.log(app);
