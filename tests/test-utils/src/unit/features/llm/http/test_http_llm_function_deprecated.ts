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
 * @evidence contracts/testing.md#behavioral-verification HttpLlm.application composes the fixture and the GET /nothing function's deprecated flag is read; dropping the flag leaves it undefined and fails the comparison.
 * @evidence contracts/testing.md#independent-expectations The fixture declares deprecated: true on /nothing as authored input; the expected value follows from that declaration, not from the composer. Only that single route is inspected.
 * @evidence contracts/testing.md#distinguishing-cases This is the positive case. The non-deprecated routes are not asserted to stay unflagged here, so over-propagation of the flag to every function would not be caught by this case.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The fixture is read from disk and composed in process with no native build, installation or host.
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
