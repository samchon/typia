import typia, { ILlmApplication } from "typia";

import { BbsArticleService } from "./BbsArticleService";

const app: ILlmApplication = typia.llm.application<BbsArticleService>();
console.log(app);
