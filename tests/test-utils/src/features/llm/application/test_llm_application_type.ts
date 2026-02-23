import { IHttpLlmApplication, ILlmApplication } from "@typia/interface";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";
import { Singleton } from "tstl";
import typia from "typia";

import { TestGlobal } from "../../../TestGlobal";

export const test_llm_application_type = (): void => {
  const http: IHttpLlmApplication = application();
  const classic: Omit<ILlmApplication, "config"> = http;
  typia.assert(classic);
};

const application = () =>
  HttpLlm.application({
    document: document.get(),
  });

const document = new Singleton(() =>
  OpenApiConverter.upgradeDocument(
    JSON.parse(
      fs.readFileSync(`${TestGlobal.ROOT}/examples/v3.1/shopping.json`, "utf8"),
    ),
  ),
);
