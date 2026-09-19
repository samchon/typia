import { IHttpLlmApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../TestGlobal";

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
