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
