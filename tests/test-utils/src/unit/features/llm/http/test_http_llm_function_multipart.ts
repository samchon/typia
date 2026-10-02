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
