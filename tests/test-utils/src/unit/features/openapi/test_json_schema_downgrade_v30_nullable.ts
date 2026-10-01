import { OpenApi, OpenApiV3 } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI 3.0 downgrade expresses nullable unions, references and
 * objects with nullable.
 *
 * OpenAPI 3.0 marks nullability on a branch with the nullable keyword.
 * Referenced components must stay referenced while the neighboring branch
 * receives it, and the component map must be downgraded consistently.
 *
 * 1. Downgrade a union whose referenced component is already nullable.
 * 2. Downgrade a nullable reference to a non-nullable target.
 * 3. Downgrade a nullable object and compare the schema with the downgraded
 *    components.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.downgradeSchema runs three scenarios and the schema and component map are compared together, so a misplaced nullable or a changed component fails.
 * @evidence contracts/testing.md#independent-expectations Authored literals follow OpenAPI 3.0's nullable convention; no expectation is copied from output.
 * @evidence contracts/testing.md#distinguishing-cases Already nullable, newly nullable reference and nullable object scenarios each flip a branch; deeper recursion is not covered.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on authored schemas with no native build, installation or host.
 */
export const test_json_schema_downgrade_v30_nullable = (): void => {
  test_originally_nullable();
  test_reference_nullable();
  test_object_nullable();
};

const test_originally_nullable = (): void => {
  const original: OpenApi.IComponents = {
    schemas: {
      union: {
        oneOf: [
          {
            type: "null",
          },
          {
            type: "string",
          },
          {
            type: "number",
          },
        ],
      },
    },
  };
  const components: OpenApiV3.IComponents = {
    schemas: {},
  };
  const schema: OpenApiV3.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "3.0",
    components: original,
    downgraded: components,
    schema: {
      oneOf: [
        {
          type: "boolean",
        },
        {
          $ref: "#/components/schemas/union",
        },
      ],
    } satisfies OpenApi.IJsonSchema,
  });
  TestEquality.equals(
    "nullable",
    {
      components: { schemas: {} },
      schema: {
        oneOf: [
          {
            type: "boolean",
            nullable: true,
          },
          {
            $ref: "#/components/schemas/union",
          },
        ],
      },
    },
    {
      components,
      schema,
    } as any,
  );
};

const test_reference_nullable = (): void => {
  const original: OpenApi.IComponents = {
    schemas: {
      union: {
        oneOf: [
          {
            type: "string",
          },
          {
            type: "number",
          },
        ],
      },
    },
  };
  const components: Record<string, OpenApiV3.IJsonSchema> = {};
  const schema: OpenApiV3.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "3.0",
    components: original,
    downgraded: components,
    schema: {
      oneOf: [
        {
          type: "null",
        },
        {
          type: "boolean",
        },
        {
          $ref: "#/components/schemas/union",
        },
      ],
    } satisfies OpenApi.IJsonSchema,
  });
  TestEquality.equals(
    "nullable",
    {
      components: {
        schemas: {
          "union.Nullable": {
            oneOf: [
              {
                type: "string",
                nullable: true,
              },
              {
                type: "number",
                nullable: true,
              },
            ],
          },
        },
      },
      schema: {
        oneOf: [
          {
            type: "boolean",
            nullable: true,
          },
          {
            $ref: "#/components/schemas/union.Nullable",
          },
        ],
      },
    },
    {
      components,
      schema,
    } as any,
  );
};

const test_object_nullable = (): void => {
  const original: OpenApi.IComponents = {
    schemas: {
      Member: {
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
  };
  const components: Record<string, OpenApiV3.IJsonSchema> = {};
  const schema: OpenApiV3.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "3.0",
    components: original,
    downgraded: components,
    schema: {
      oneOf: [
        {
          $ref: "#/components/schemas/Member",
        },
        {
          type: "null",
        },
      ],
    } satisfies OpenApi.IJsonSchema,
  });
  TestEquality.equals(
    "nullable",
    {
      components: {
        schemas: {
          "Member.Nullable": {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              age: {
                type: "number",
              },
            },
            nullable: true,
            required: ["name", "age"],
          },
        },
      },
      schema: {
        $ref: "#/components/schemas/Member.Nullable",
      },
    },
    {
      components,
      schema,
    } as any,
  );
};
