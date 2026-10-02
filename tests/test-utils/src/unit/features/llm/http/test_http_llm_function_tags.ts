import {
  IHttpLlmApplication,
  IHttpLlmFunction,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../../TestGlobal";

/**
 * Verifies an HttpLlm function carries the route's tags.
 *
 * Tags group functions for model-facing selection. The composer derives them
 * from the operation, so a regression would silently drop or reorder the
 * grouping.
 *
 * 1. Compose the application from the checked-in swagger fixture.
 * 2. Find the function for POST /{index}/{level}/{optimal}/body.
 * 3. Assert its tags equal the fixture's ["body", "post"].
 *
 */
export const test_http_llm_function_tags = async (): Promise<void> => {
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
    JSON.parse(
      await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
    ),
  );
  const application: IHttpLlmApplication = HttpLlm.application({
    document,
  });
  const func: IHttpLlmFunction | undefined = application.functions.find(
    (f) => f.method === "post" && f.path === "/{index}/{level}/{optimal}/body",
  );
  TestEquality.equals("tags", func?.tags, ["body", "post"]);
};
