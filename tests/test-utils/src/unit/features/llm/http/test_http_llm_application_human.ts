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
 * @evidence contracts/testing.md#behavioral-verification HttpLlm.application is run on the original and on the flagged document copy and the function counts are compared; ignoring the extension leaves the counts equal and failing to drop only the flagged operation changes the difference.
 * @evidence contracts/testing.md#independent-expectations The expectation is the documented extension semantics: flagging exactly one operation removes exactly one function, with the baseline count taken from the same fixture rather than a literal. It does not name which function disappears.
 * @evidence contracts/testing.md#distinguishing-cases The unflagged baseline is the negative twin and one flagged operation is the positive case. Several flagged operations, a false flag and other extensions are not covered here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The swagger fixture is read from disk and composed in process with no native build, installation or host.
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
