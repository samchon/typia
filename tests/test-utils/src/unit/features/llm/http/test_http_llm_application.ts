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
