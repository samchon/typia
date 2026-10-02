import { IHttpLlmApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../../TestGlobal";

/**
 * Verifies an x-samchon-human operation is excluded from the composed
 * application.
 *
 * The x-samchon-human extension marks operations that a human must perform, so
 * the LLM must not be offered them. A composer that ignored the flag would
 * expose a function the document author reserved.
 *
 * 1. Compose the baseline application from the checked-in swagger fixture.
 * 2. Copy the document and set x-samchon-human on one operation, then compose
 *    again.
 * 3. Assert the flagged variant has exactly one function fewer.
 *
 */
export const test_http_llm_application_human = async (): Promise<void> => {
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

  TestEquality.equals(
    "length",
    application.functions.length,
    humanApplication.functions.length + 1,
  );
};
