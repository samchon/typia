import {
  IHttpLlmApplication,
  IHttpLlmFunction,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm } from "@typia/utils";
import { IValidation } from "typia";

export const test_llm_applicationEquals = (): void => {
  const application: IHttpLlmApplication = HttpLlm.application({
    document,
    config: {
      equals: true,
    },
  });
  const func: IHttpLlmFunction = application.functions[0]!;
  const result: IValidation<unknown> = func.validate({
    body: {
      value: 1,
      superfluous: "property",
    },
  });
  TestEquality.equals("result-success", result.success, false);
  if (!result.success)
    TestEquality.subset(
      "result-errors",
      [{ expected: "undefined" }],
      result.errors,
    );
};

const document: OpenApi.IDocument = {
  openapi: "3.2.0",
  "x-typia-emended-v12": true,
  components: {},
  paths: {
    "/validateEquals": {
      post: {
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  value: {
                    type: "number",
                  },
                },
                required: ["value"],
              },
            },
          },
          description: "Validate LLM application equals",
        },
      },
    },
  },
};
