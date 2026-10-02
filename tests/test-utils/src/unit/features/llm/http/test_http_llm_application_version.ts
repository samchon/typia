import { IHttpLlmApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../../TestGlobal";

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
 *
 * @evidence contracts/testing.md#behavioral-verification HttpLlm.application is composed from the upgraded fixture and its version is compared with the document's info.version; discarding or defaulting the version changes the comparison.
 * @evidence contracts/testing.md#independent-expectations The expected value is read from the fixture's own info.version, a literal in swagger.json, not from the application. The fixture version is a development string, so only verbatim pass-through is established.
 * @evidence contracts/testing.md#distinguishing-cases One document with a version is the positive case. A document without info.version, an empty version or a custom override is not covered by this case.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The swagger fixture is read from disk and composed in process with no native build, installation or host.
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
  TestEquality.equals(
    "application.version should mirror the document info.version",
    application.version,
    document.info?.version,
  );
};
