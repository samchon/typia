import { TestValidator } from "@nestia/e2e";
import {
  HttpLlm,
  IHttpLlmApplication,
  IHttpLlmFunction,
  IValidation,
  OpenApi,
} from "@samchon/openapi";

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
  TestValidator.predicate(
    "result",
    () =>
      result.success === false &&
      result.errors.length === 1 &&
      result.errors[0]!.path === "$input.body.superfluous" &&
      result.errors[0]!.expected === "undefined",
  );
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
