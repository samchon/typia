import { ILlmApplication } from "@samchon/openapi";
import typia from "typia";

import { BbsArticleService } from "./BbsArticleService";

const app: ILlmApplication<"chatgpt"> = typia.llm.application<
  BbsArticleService,
  "chatgpt"
>();
console.log(app);
