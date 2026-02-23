import { TestValidator } from "@nestia/e2e";
import { IHttpLlmApplication, OpenApi } from "@typia/interface";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../TestGlobal";

export const test_http_llm_application = async (): Promise<void> => {
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
    JSON.parse(
      await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
    ),
  );
  const application: IHttpLlmApplication = HttpLlm.application({
    document,
  });

  const humanSwagger: OpenApi.IDocument = JSON.parse(JSON.stringify(document));
  (
    humanSwagger.paths!["/{index}/{level}/{optimal}/body"]!
      .post as OpenApi.IOperation
  )["x-samchon-human"] = true;
  const humanDocument: OpenApi.IDocument =
    OpenApiConverter.upgradeDocument(humanSwagger);
  const humanApplication: IHttpLlmApplication = HttpLlm.application({
    document: humanDocument,
  });

  TestValidator.equals(
    "length",
    application.functions.length,
    humanApplication.functions.length + 1,
  );
};
