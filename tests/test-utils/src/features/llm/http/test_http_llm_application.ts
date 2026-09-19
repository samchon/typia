import {
  IHttpLlmApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../TestGlobal";

export const test_http_llm_application = async (): Promise<void> => {
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
    JSON.parse(
      await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
    ),
  );
  const application: IHttpLlmApplication = HttpLlm.application({
    document,
  });
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
