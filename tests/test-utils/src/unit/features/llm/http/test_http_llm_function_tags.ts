import {
  IHttpLlmApplication,
  IHttpLlmFunction,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 * @evidence contracts/testing.md#behavioral-verification HttpLlm.application composes the fixture and the selected function's tags array is compared exactly, so dropped, extra or reordered tags fail.
 * @evidence contracts/testing.md#independent-expectations The expected tags are the literal values authored on that operation in swagger.json, independent of the composer. Only one operation is inspected.
 * @evidence contracts/testing.md#distinguishing-cases One tagged operation is the positive case; an operation with no tags, duplicated tags or tag aggregation is not covered by this case.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The fixture is read from disk and composed in process with no native build, installation or host.
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
