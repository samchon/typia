import { TestValidator } from "@nestia/e2e";
import {
  HttpLlm,
  IHttpLlmApplication,
  LlmTypeChecker,
  OpenApi,
  OpenApiV3,
  OpenApiV3_1,
  SwaggerV2,
} from "@samchon/openapi";
import { Singleton } from "tstl";
import typia from "typia";

export const test_llm_application_separate = async (): Promise<void> => {
  const application: IHttpLlmApplication = HttpLlm.application({
    document: await document.get(),
    config: {
      separate: (schema) =>
        LlmTypeChecker.isString(schema as any) &&
        (schema as any)["x-wrtn-secret-key"] !== undefined,
    },
  });
  for (const func of application.functions)
    TestValidator.equals("separated", !!func.separated, true);
};

const document = new Singleton(async (): Promise<OpenApi.IDocument> => {
  const swagger:
    | SwaggerV2.IDocument
    | OpenApiV3.IDocument
    | OpenApiV3_1.IDocument = await fetch(
    "https://wrtnlabs.github.io/connectors/swagger/swagger.json",
  ).then((r) => r.json());
  return OpenApi.convert(typia.assert(swagger));
});
