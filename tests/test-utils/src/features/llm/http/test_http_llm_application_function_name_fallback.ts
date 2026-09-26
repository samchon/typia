import { IHttpLlmApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm, OpenApiConverter } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../../TestGlobal";

/**
 * Verifies a function name no accessor suffix can shorten still obeys every
 * name rule.
 *
 * `HttpLlm` shortens a name beyond `maxLength` by dropping leading accessor
 * segments. When even the last one, the method alias built from every path
 * parameter, was too long, it fell back to a random UUID: the name changed on
 * every composition, started with a digit ten times in sixteen although the
 * composer rejects such names for every other function, and was longer than a
 * `maxLength` below 36 (#2456). The GitHub example has eleven such routes.
 *
 * 1. Compose the GitHub example and a document of long sibling routes twice, at
 *    several `maxLength` values.
 * 2. Assert the names are identical across compositions, unique, at most
 *    `maxLength`, and of the composer's own grammar.
 */
export const test_http_llm_application_function_name_fallback =
  async (): Promise<void> => {
    const github: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
      JSON.parse(
        await fs.promises.readFile(
          `${TestGlobal.ROOT}/examples/v3.0/github.json`,
          "utf8",
        ),
      ),
    );
    const parameters = (names: string[]): OpenApi.IOperation.IParameter[] =>
      names.map((name) => ({
        name,
        in: "path",
        required: true,
        schema: { type: "string" },
      }));
    const operation = (names: string[]): OpenApi.IOperation => ({
      parameters: parameters(names),
      responses: {
        200: {
          description: "ok",
          content: { "application/json": { schema: { type: "string" } } },
        },
      },
    });
    const long: string[] = [
      "organizationId",
      "repositoryId",
      "pullRequestNumber",
      "commentId",
    ];
    const siblings: OpenApi.IDocument = {
      openapi: "3.2.0",
      "x-typia-emended-v12": true,
      components: {},
      paths: Object.fromEntries(
        ["alpha", "beta", "gamma"].map((prefix) => [
          `/${prefix}/{${long.join("}/{")}}`,
          { get: operation(long), delete: operation(long) },
        ]),
      ),
    };

    for (const [title, document] of [
      ["github", github],
      ["siblings", siblings],
    ] as const)
      for (const maxLength of [64, 36, 20, 8]) {
        const compose = (): IHttpLlmApplication =>
          HttpLlm.application({ document, config: { maxLength } });
        const names: string[] = compose().functions.map((func) => func.name);
        const label: string = `${title} maxLength ${maxLength}`;
        TestEquality.equals(
          `${label}: deterministic`,
          compose().functions.map((func) => func.name),
          names,
        );
        TestEquality.equals(
          `${label}: unique`,
          new Set(names).size,
          names.length,
        );
        TestEquality.equals(
          `${label}: rules`,
          names.filter(
            (name) =>
              name.length > maxLength ||
              /^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(name) === false,
          ),
          [],
        );
      }
  };
