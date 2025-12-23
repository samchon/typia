import { ILlmApplication } from "@samchon/openapi";
import typia from "typia";

import { BbsArticleService } from "./BbsArticleService";

const app: ILlmApplication = typia.llm.application<BbsArticleService>();
console.log(app);
