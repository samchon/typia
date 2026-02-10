import { TestValidator } from "@nestia/e2e";
import { HttpLlm, IHttpLlmApplication, OpenApi } from "@samchon/openapi";

export const test_http_llm_application_function_name_length =
  async (): Promise<void> => {
    const document: OpenApi.IDocument = OpenApi.convert(
      await fetch(
        "https://wrtnlabs.github.io/connectors/swagger/swagger.json",
      ).then((res) => res.json()),
    );
    const application: IHttpLlmApplication = HttpLlm.application({
      document,
    });

    TestValidator.predicate("overflow", () =>
      application.functions.some(
        (f) => f.route().accessor.join("_").length > 64,
      ),
    );

    const names: string[] = application.functions.map((f) => f.name);
    TestValidator.predicate("length", () => names.every((s) => s.length <= 64));
    TestValidator.equals("unique", true, new Set(names).size === names.length);
  };
