import type {
  IHttpLlmApplication,
  IJsonSchemaCollection,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { HttpLlm } from "@typia/utils";

/**
 * Verifies HTTP LLM composition reports missing schema references per route.
 *
 * The references intentionally differ from the definitions by one suffix.
 * Authored point, circle and rectangle schemas isolate reference resolution
 * from native schema generation while retaining every original diagnostic.
 *
 * 1. Compose three request bodies referring to absent component names.
 * 2. Compare the original rejected population and all diagnostic accessors.
 * 3. Correct only the three reference names and require valid body acceptance.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct HttpLlm.application must reject each missing request-body reference, preserve the original zero-functions, three-errors and accessor assertions, and accept all three routes after only their reference names are corrected.
 * @evidence contracts/testing.md#independent-expectations Literal OpenAPI object definitions specify required numeric point coordinates, circle radius/center and rectangle endpoints. References ending in 1 have no matching definition; the diagnostic locations follow the authored path/requestBody positions rather than implementation-produced expectations.
 * @evidence contracts/testing.md#distinguishing-cases Point, circle and rectangle request bodies retain all three unresolved-reference diagnostics. One-axis corrected references must produce three callable functions without errors and accept their hand-authored bodies, distinguishing reference rejection from an implementation that rejects every operation.
 * @evidence contracts/testing.md#execution-ownership This exported case is registered by the plugin-free test-utils-unit node:test runner. The removed native generator supplied only setup data and had no assertions of its own; the same meaningful reference-resolution assertions execute against authored schemas through HttpLlm directly. Native schema producer coverage remains in test-typia-schema and is not claimed by this unit.
 */
export const test_llm_application_mismatch = (): void => {
  const collection: IJsonSchemaCollection = {
    version: "3.1",
    schemas: [
      { $ref: "#/components/schemas/IPoint" },
      { $ref: "#/components/schemas/ICircle" },
      { $ref: "#/components/schemas/IRectangle" },
    ],
    components: {
      schemas: {
        IPoint: {
          type: "object",
          properties: { x: { type: "number" }, y: { type: "number" } },
          required: ["x", "y"],
          additionalProperties: false,
        },
        ICircle: {
          type: "object",
          properties: {
            radius: { type: "number" },
            center: { $ref: "#/components/schemas/IPoint" },
          },
          required: ["radius", "center"],
          additionalProperties: false,
        },
        IRectangle: {
          type: "object",
          properties: {
            p1: { $ref: "#/components/schemas/IPoint" },
            p2: { $ref: "#/components/schemas/IPoint" },
          },
          required: ["p1", "p2"],
          additionalProperties: false,
        },
      },
    },
  };
  collection.schemas[0] = { $ref: "#/components/schemas/IPoint1" };
  collection.schemas[1] = { $ref: "#/components/schemas/ICircle1" };
  collection.schemas[2] = { $ref: "#/components/schemas/IRectangle1" };

  const document: OpenApi.IDocument = {
    openapi: "3.2.0",
    components: collection.components,
    paths: {
      "/point": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: collection.schemas[0],
              },
            },
          },
        },
      },
      "/circle": {
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
      "/rectangle": {
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
    app.errors
      .map((error) => error.messages.map((m) => m.split(":")[0]))
      .flat()
      .sort(),
    Object.keys(document.paths ?? {})
      .map(
        (path) =>
          `$input.paths[${JSON.stringify(path)}]["post"].requestBody.content["application/json"].schema`,
      )
      .sort(),
  );
  collection.schemas[0] = { $ref: "#/components/schemas/IPoint" };
  collection.schemas[1] = { $ref: "#/components/schemas/ICircle" };
  collection.schemas[2] = { $ref: "#/components/schemas/IRectangle" };
  const corrected = HttpLlm.application({
    document: {
      ...document,
      paths: Object.fromEntries(
        Object.entries(document.paths ?? {}).map(([path, item], index) => [
          path,
          {
            ...item,
            post: {
              ...item.post!,
              requestBody: {
                content: {
                  "application/json": { schema: collection.schemas[index] },
                },
              },
            },
          },
        ]),
      ),
    },
  });
  TestEquality.equals("corrected-functions", corrected.functions.length, 3);
  TestEquality.equals("corrected-errors", corrected.errors, []);
  TestEquality.equals(
    "corrected-paths",
    corrected.functions.map((func) => func.path).sort(),
    ["/circle", "/point", "/rectangle"],
  );
  const bodies = {
    "/point": { x: 1, y: 2 },
    "/circle": { radius: 3, center: { x: 1, y: 2 } },
    "/rectangle": { p1: { x: 1, y: 2 }, p2: { x: 3, y: 4 } },
  };
  for (const func of corrected.functions)
    TestEquality.equals(
      "corrected-body-" + func.path,
      func.validate({ body: bodies[func.path as keyof typeof bodies] }).success,
      true,
    );
};
