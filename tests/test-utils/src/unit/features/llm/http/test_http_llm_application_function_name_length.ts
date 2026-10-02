import { IHttpLlmApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../../TestGlobal";

/**
 * Verifies default HttpLlm composition keeps long routes within 64 characters
 * and unique.
 *
 * The default maxLength of 64 exists because LLM providers reject longer
 * function names. The GitHub example holds routes whose joined accessor exceeds
 * that limit, so the shortening path must engage under the default
 * configuration and still leave every name unique.
 *
 * 1. Upgrade the checked-in GitHub example and compose it with the default
 *    configuration.
 * 2. Assert at least one route accessor joined by underscores exceeds 64
 *    characters.
 * 3. Assert every function name is at most 64 characters and all names are unique.
 *
 */
export const test_http_llm_application_function_name_length =
  async (): Promise<void> => {
    const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
      JSON.parse(
        await fs.promises.readFile(
          `${TestGlobal.ROOT}/examples/v3.0/github.json`,
          "utf8",
        ),
      ),
    );
    const application: IHttpLlmApplication = HttpLlm.application({
      document,
    });

    TestEquality.equals(
      "overflow",
      true,
      application.functions.some(
        (f) => f.route().accessor.join("_").length > 64,
      ),
    );

    const names: string[] = application.functions.map((f) => f.name);
    TestEquality.equals(
      "length",
      [] as string[],
      names.filter((name) => name.length > 64),
    );
    TestEquality.equals("unique", names.length, new Set(names).size);
  };
