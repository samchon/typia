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
 * Verifies an OpenAPI deprecated operation yields a deprecated HttpLlm
 * function.
 *
 * Deprecation guides a model away from obsolete operations. If the flag were
 * lost during composition a model would treat a retired endpoint like any
 * other.
 *
 * 1. Compose the application from the checked-in swagger fixture.
 * 2. Find the function for GET /nothing, the operation the fixture marks
 *    deprecated.
 * 3. Assert its deprecated flag is true.
 *
 */
export const test_http_llm_function_deprecated = async (): Promise<void> => {
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
    JSON.parse(
      await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
    ),
  );
  const application: IHttpLlmApplication = HttpLlm.application({
    document,
  });
  const func: IHttpLlmFunction | undefined = application.functions.find(
    (f) => f.method === "get" && f.path === "/nothing",
  );
  TestEquality.equals("deprecated", func?.deprecated, true);
};
