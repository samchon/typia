import { IJsonSchemaUnit, OpenApi } from "@typia/interface";

import { _test_llm_invert } from "../../../internal/_test_llm_invert";

/**
 * Verifies the inversion oracle compares referenced contents and rejects
 * invalid references.
 *
 * Reference spelling cannot replace comparison of the schema it denotes. These
 * authored schemas exercise the oracle without asking a native producer for
 * either side, including recursive references that must terminate.
 *
 * 1. Compare a string definition with equivalent escaped and aliased JSON
 *    references.
 * 2. Reject a different target, missing target, inherited target and alias cycle.
 * 3. Compare independently authored recursive objects without infinite expansion.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual _test_llm_invert helper accepts equivalent string targets despite pointer escaping and aliases, rejects number targets and invalid component graphs, and terminates on recursive object schemas.
 * @evidence contracts/testing.md#independent-expectations Literal string versus number schemas establish the intended verdict without native generation; RFC 6901 makes A~1B~0C denote A/B~C. The oracle decodes pointers itself to preserve reference siblings and distinguish definition contents without using the converter's reference-resolution result as its expectation.
 * @evidence contracts/testing.md#distinguishing-cases Plain, slash/tilde and percent-encoded equivalent references, aliases, changed type, missing and inherited entries, alias cycles, recursive objects and reference-shaped example data remain distinct inputs.
 * @evidence contracts/testing.md#execution-ownership The plugin-free test-utils unit runner explicitly registers this exported case. Both LLM and JSON schemas are authored values; no typia schema call, native artifact, consumer installation or host is required by its operations.
 */
export const test_llm_invert_oracle_references = (): void => {
  const compare = (
    schema: OpenApi.IJsonSchema,
    components: OpenApi.IComponents,
  ): void =>
    _test_llm_invert(
      "reference oracle",
      { $ref: "#/$defs/Plain" },
      { Plain: { type: "string" } },
      { version: "3.1", schema, components },
    );
  for (const reference of [
    "#/components/schemas/A~1B~0C",
    "#/components/schemas/A%7E1B%7E0C",
  ])
    compare({ $ref: reference }, { schemas: { "A/B~C": { type: "string" } } });
  compare(
    { $ref: "#/components/schemas/Alias" },
    {
      schemas: {
        Alias: { $ref: "#/components/schemas/Plain" },
        Plain: { type: "string" },
      },
    },
  );
  const reject = (title: string, task: () => void): void => {
    let caught: unknown;
    try {
      task();
    } catch (error) {
      caught = error;
    }
    if (!(caught instanceof Error))
      throw new Error(`${title}: the oracle must reject`);
  };
  reject("different resolved contents", () =>
    compare(
      { $ref: "#/components/schemas/A~1B~0C" },
      { schemas: { "A/B~C": { type: "number" } } },
    ),
  );
  reject("missing target", () =>
    compare({ $ref: "#/components/schemas/Missing" }, {}),
  );
  reject("inherited target", () =>
    compare(
      { $ref: "#/components/schemas/Plain" },
      {
        schemas: Object.create({ Plain: { type: "string" } }),
      },
    ),
  );
  reject("alias cycle", () =>
    compare(
      { $ref: "#/components/schemas/A" },
      {
        schemas: {
          A: { $ref: "#/components/schemas/B" },
          B: { $ref: "#/components/schemas/A" },
        },
      },
    ),
  );
  _test_llm_invert(
    "reference-shaped literal data",
    {
      type: "string",
      example: { $ref: "literal data, not a schema reference" },
    },
    {},
    {
      version: "3.1",
      schema: {
        type: "string",
        example: { $ref: "literal data, not a schema reference" },
      },
      components: {},
    },
  );
  const recursive: IJsonSchemaUnit = {
    version: "3.1",
    schema: { $ref: "#/components/schemas/Recursive" },
    components: {
      schemas: {
        Recursive: {
          type: "object",
          properties: {
            next: { $ref: "#/components/schemas/Recursive" },
          },
          required: ["next"],
          additionalProperties: false,
        },
      },
    },
  };
  _test_llm_invert(
    "recursive oracle",
    { $ref: "#/$defs/Recursive" },
    {
      Recursive: {
        type: "object",
        properties: { next: { $ref: "#/$defs/Recursive" } },
        required: ["next"],
        additionalProperties: false,
      },
    },
    recursive,
  );
};
