import {
  IHttpLlmApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../../TestGlobal";

/**
 * Verifies each composed HttpLlm function exposes exactly its route's argument
 * keys.
 *
 * An LLM function's parameter object is assembled from the migrated route's
 * path parameters, headers, cookies, query and body. A composer regression that
 * dropped, renamed or reordered a key would hide an argument from the model or
 * advertise one the route cannot accept.
 *
 * 1. Upgrade the checked-in swagger fixture and compose it through
 *    HttpLlm.application.
 * 2. Require the fixture to produce functions, then read every migrated route and
 *    assert the parameter schema is an object.
 * 3. Assert the property keys equal the route's path-parameter keys followed by
 *    headers, cookies, query and body when present.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpLlm.application must produce a nonempty function population before each function's route() and object-key comparison run. Dropping every function cannot make the loop pass vacuously; dropping, renaming, reordering or inventing an argument key changes the comparison.
 * @evidence contracts/testing.md#independent-expectations The fixture is an authored swagger document and the expected key order follows the documented route-to-parameter mapping, computed from each function's route() record instead of the produced schema. route() shares the migrator with the code under test, so route extraction itself is not independently verified here.
 * @evidence contracts/testing.md#distinguishing-cases The fixture routes carry path-only, path plus query, path plus body and path plus query plus body arguments, so presence and absence of query and body both decide the expected keys. It has no header or cookie route and asserts keys, not property schemas; deprecation, tags and unsupported multipart belong to their own cases.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. HttpLlm and OpenApiConverter run in process and the resolver reads swagger.json from disk; no native build, consumer installation or host is involved.
 */
export const test_http_llm_application = async (): Promise<void> => {
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
    JSON.parse(
      await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
    ),
  );
  const application: IHttpLlmApplication = HttpLlm.application({
    document,
  });
  TestEquality.equals(
    "fixture produces functions",
    application.functions.length > 0,
    true,
  );
  for (const func of application.functions) {
    const route: IHttpMigrateRoute = func.route();
    TestEquality.subset("type", { type: "object" }, func.parameters);
    TestEquality.equals(
      "properties",
      [
        ...route.parameters.map((p) => p.key),
        ...(route.headers ? [route.headers.key] : []),
        ...(route.cookies ? [route.cookies.key] : []),
        ...(route.query ? ["query"] : []),
        ...(route.body ? ["body"] : []),
      ],
      Object.keys(func.parameters.properties ?? {}),
    );
  }
};
