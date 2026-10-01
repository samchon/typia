import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI 3.1 downgrade keeps nullable unions, references and objects
 * as null members.
 *
 * OpenAPI 3.1 states nullability with a null type member. Referenced components
 * and nullable objects must keep that spelling after downgrade.
 *
 * 1. Downgrade a union whose referenced component is already nullable.
 * 2. Downgrade a nullable reference to a non-nullable target.
 * 3. Downgrade a nullable object and compare the schema with the downgraded
 *    components.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.downgradeSchema runs three scenarios and the schema and component map are compared together, so an introduced nullable keyword or a changed component fails.
 * @evidence contracts/testing.md#independent-expectations Authored literals follow JSON Schema 2020-12 null-type semantics, independent of converter output.
 * @evidence contracts/testing.md#distinguishing-cases Already nullable, newly nullable reference and nullable object scenarios each flip a branch; deeper recursion is not covered.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on authored schemas with no native build, installation or host.
 */
export const test_json_schema_downgrade_v31_nullable = (): void => {
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
  const components: OpenApiV3_1.IComponents = {
    schemas: {},
  };
  const schema: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "3.1",
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
  const components: OpenApiV3_1.IComponents = {
    schemas: {},
  };
  const schema: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "3.1",
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
      components: { schemas: {} },
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
  const components: OpenApiV3_1.IComponents = {
    schemas: {},
  };
  const schema: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "3.1",
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
      components: { schemas: {} },
      schema: {
        oneOf: [
          {
            $ref: "#/components/schemas/Member",
          },
          {
            type: "null",
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
