import { TestValidator } from "@nestia/e2e";
import {
  IHttpLlmApplication,
  IHttpLlmFunction,
  OpenApi,
} from "@typia/interface";
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
  TestValidator.equals("result-success", result.success, false);
  if (!result.success)
    TestValidator.equals("result-errors", [{ expected: "undefined" }], result.errors);
};

const document: OpenApi.IDocument = {
  openapi: "3.1.0",
  "x-samchon-emended-v4": true,
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
