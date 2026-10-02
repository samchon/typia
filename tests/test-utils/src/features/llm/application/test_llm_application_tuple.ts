import { IHttpLlmApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm } from "@typia/utils";
import typia, { IJsonSchemaCollection } from "typia";

/**
 * Verifies a native typia tuple schema inside an OpenAPI document is reported
 * as an application error.
 *
 * Function calling cannot express tuples. A document built from
 * typia.json.schemas of tuple shapes must be rejected per route by
 * HttpLlm.application, with each tuple location reported.
 *
 * 1. Generate tuple-bearing schemas with typia.json.schemas and place them in
 *    query and body positions of an authored document.
 * 2. Compose the application with HttpLlm.application.
 * 3. Assert the application reports the tuple routes as errors.
 *
 * @evidence contracts/testing.md#behavioral-verification HttpLlm.application runs on a document whose schemas come from the native typia.json.schemas; the reported errors and functions are compared, so accepting a tuple or losing a location fails.
 * @evidence contracts/testing.md#independent-expectations The tuple types are authored TypeScript and the expectation that tuples are unsupported in function calling is the documented limitation; the schemas are produced natively but the verdict is not derived from the composer.
 * @evidence contracts/testing.md#distinguishing-cases Root, property and nested array tuples are separate routes; ordinary arrays are covered by other application cases.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. The tuple schemas are produced by the native transform, which is the producer-to-composer connection this case needs; the composer's own rules are covered by unit cases on authored schemas.
 * @evidence contracts/e2e.md#necessary-boundary Native json.schemas emits tuple-containing declarations consumed by HttpLlm.application. Three authored diagnostic accessors and zero successful functions pin rejection of the actual producer representation.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_llm_application_tuple = (): void => {
  const collection: IJsonSchemaCollection = typia.json.schemas<
    [
      [number, number],
      {
        x: [number, string];
        y: [string, number];
      },
      {
        props: {
          items: Array<{
            nested: [number, boolean];
          }>;
        };
      },
    ]
  >();
  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    components: collection.components,
    paths: {
      "/plus": {
        post: {
          parameters: [
            {
              in: "query" as const,
              name: "values",
              schema: collection.schemas[0]!,
            } satisfies OpenApi.IOperation.IParameter,
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: collection.schemas[0],
              },
            },
          },
          responses: {
            201: {
              content: {
                "application/json": {
                  schema: collection.schemas[0],
                },
              },
            },
          },
        },
      },
      "/minus": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: collection.schemas[1],
              },
            },
          },
        },
      },
      "/delta": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: collection.schemas[2],
              },
            },
          },
        },
      },
    },
    "x-typia-emended-v12": true,
  };
  const app: IHttpLlmApplication = HttpLlm.application({
    document,
  });

  TestEquality.equals("#success", app.functions.length, 0);
  TestEquality.equals("#errors", app.errors.length, 3);
  TestEquality.equals(
    "accessors",
    app.errors.map((error) =>
      error.messages.map((m) => m.split(":")[0]).sort(),
    ),
    [
      [
        '$input.components.schemas["IApiPlus.PostBody"]',
        '$input.components.schemas["IApiPlus.PostQuery"].properties["values"]',
        '$input.paths["/plus"]["post"].responses["201"]["application/json"].schema',
      ].sort(),
      [
        '$input.components.schemas["IApiMinus.PostBody"].properties["x"]',
        '$input.components.schemas["IApiMinus.PostBody"].properties["y"]',
      ].sort(),
      [
        '$input.components.schemas["IApiDelta.PostBody"].properties["props"].properties["items"].items.properties["nested"]',
      ].sort(),
    ],
  );
};
