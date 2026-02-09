import { TestValidator } from "@nestia/e2e";
import {
  HttpLlm,
  IHttpLlmApplication,
  IHttpLlmFunction,
  IValidation,
  OpenApi,
  OpenApiTypeChecker,
} from "@samchon/openapi";

export const test_llm_application_separateEquals = (): void => {
  const application: IHttpLlmApplication = HttpLlm.application({
    document,
    config: {
      equals: true,
      separate: (schema: OpenApi.IJsonSchema) =>
        OpenApiTypeChecker.isNumber(schema),
    },
  });
  const func: IHttpLlmFunction = application.functions[0];
  const result: IValidation<unknown> = func.separated!.validate!({
    body: {
      name: "John Doe",
      age: 30,
    },
  });
  TestValidator.predicate("result")(
    result.success === false &&
      result.errors.length === 1 &&
      result.errors[0].path === "$input.body.age" &&
      result.errors[0].expected === "undefined",
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
                  name: {
                    type: "string",
                  },
                  age: {
                    type: "number",
                  },
                },
                required: ["name", "age"],
              },
            },
          },
          description: "Validate LLM application equals",
        },
      },
    },
  },
};
