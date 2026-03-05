import { LlmTypeChecker } from "@typia/utils";
import typia, { ILlmApplication, ILlmSchema } from "typia";

import { BbsArticleService } from "./BbsArticleService";

const app: ILlmApplication = typia.llm.application<BbsArticleService>({
  separate: (schema: ILlmSchema) =>
    LlmTypeChecker.isString(schema) && schema.contentMediaType !== undefined,
});
console.log(app);
