import { IHttpLlmApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../../TestGlobal";

/**
 * Verifies a multipart route is reported as an application error, not a
 * function.
 *
 * Function calling cannot carry multipart/form-data bodies. The composer must
 * surface such an operation in application.errors instead of silently exposing
 * an uncallable function.
 *
 * 1. Compose the application from the checked-in swagger fixture.
 * 2. Search application.errors for POST /{index}/{level}/{optimal}/multipart.
 * 3. Assert the error entry exists.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpLlm.application is run on the fixture and the multipart route's presence in errors is asserted; accepting the route as a function would remove the error entry.
 * @evidence contracts/testing.md#independent-expectations The fixture authors the multipart/form-data body and the composer's documented limitation is that it is unsupported; the expected error follows from that rule, not from an implementation snapshot. The error message is not asserted.
 * @evidence contracts/testing.md#distinguishing-cases The multipart route is the negative-support case. The adjacent JSON body routes composing normally is covered by test_http_llm_application, while absence of the multipart function in functions is not asserted here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The fixture is read from disk and composed in process with no native build, installation or host.
 */
export const test_http_llm_function_multipart = async (): Promise<void> => {
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
    JSON.parse(
      await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
    ),
  );
  const application: IHttpLlmApplication = HttpLlm.application({
    document,
  });
  TestEquality.equals(
    "multipart not supported",
    !!application.errors.find(
      (e) =>
        e.method === "post" &&
        e.path === "/{index}/{level}/{optimal}/multipart",
    ),
    true,
  );
};
