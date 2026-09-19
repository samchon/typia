import {
  IHttpLlmApplication,
  IHttpLlmFunction,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../TestGlobal";

export const test_http_llm_function_tags = async (): Promise<void> => {
  const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
    JSON.parse(
      await fs.promises.readFile(`${TestGlobal.ROOT}/swagger.json`, "utf8"),
    ),
  );
  const application: IHttpLlmApplication = HttpLlm.application({
    document,
  });
  const func: IHttpLlmFunction | undefined = application.functions.find(
    (f) => f.method === "post" && f.path === "/{index}/{level}/{optimal}/body",
  );
  TestEquality.equals("tags", func?.tags, ["body", "post"]);
};
