import { TestValidator } from "@nestia/e2e";
import { IHttpLlmApplication, OpenApi } from "@typia/interface";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../TestGlobal";

/**
 * Verifies `HttpLlm.application()` preserves the OpenAPI `info.version`.
 *
 * The document's `info.version` is the natural version source for an
 * HTTP-derived application, and downstream adapters (e.g. `@typia/mcp`'s
 * handshake `serverInfo.version`) read it from `IHttpLlmApplication.version`. A
 * regression would silently discard it and every adapter would fall back to its
 * own default.
 *
 * 1. Load the swagger fixture and upgrade it to the emended format.
 * 2. Compose the application through `HttpLlm.application()`.
 * 3. Assert `application.version` mirrors `document.info.version`.
 */
export const test_http_llm_application_version = async (): Promise<void> => {
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
    JSON.parse(
      await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
    ),
  );
  const application: IHttpLlmApplication = HttpLlm.application({
    document,
  });
  TestValidator.equals(
    "application.version should mirror the document info.version",
    application.version,
    document.info?.version,
  );
};
