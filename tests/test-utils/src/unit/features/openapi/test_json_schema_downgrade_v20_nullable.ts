import { OpenApi, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies Swagger 2 downgrade expresses nullable unions, references and
 * objects with x-nullable.
 *
 * Swagger 2 cannot state a null member, so each nullable shape must be
 * rewritten consistently and referenced components must be downgraded alongside
 * it without losing nullability.
 *
 * 1. Downgrade a schema whose referenced union is originally nullable.
 * 2. Downgrade a nullable reference whose target is not nullable.
 * 3. Downgrade a nullable object and compare the schema and downgraded components.
 */
export const test_json_schema_downgrade_v20_nullable = (): void => {
  test_originally_nullable();
  test_reference_nullable();
  test_object_nullable();
};

const test_originally_nullable = (): void => {
  const components: OpenApi.IComponents = {
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
  const downgraded: Record<string, SwaggerV2.IJsonSchema> = {};
  const schema: SwaggerV2.IJsonSchema = OpenApiConverter.downgradeSchema({
    components,
    downgraded,
    version: "2.0",
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
      components: {},
      schema: {
        "x-oneOf": [
          {
            type: "boolean",
            "x-nullable": true,
          },
          {
            $ref: "#/definitions/union",
          },
        ],
      },
    },
    {
      components: downgraded,
      schema,
    } as any,
  );
};

const test_reference_nullable = (): void => {
  const components: OpenApi.IComponents = {
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
  const downgraded: Record<string, SwaggerV2.IJsonSchema> = {};
  const schema: SwaggerV2.IJsonSchema = OpenApiConverter.downgradeSchema({
    components,
    downgraded,
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
    version: "2.0",
  });
  TestEquality.equals(
    "nullable",
    {
      components: {
        "union.Nullable": {
          "x-oneOf": [
            {
              type: "string",
              "x-nullable": true,
            },
            {
              type: "number",
              "x-nullable": true,
            },
          ],
        },
      },
      schema: {
        "x-oneOf": [
          {
            type: "boolean",
            "x-nullable": true,
          },
          {
            $ref: "#/definitions/union.Nullable",
          },
        ],
      },
    },
    {
      components: downgraded,
      schema,
    } as any,
  );
};

const test_object_nullable = (): void => {
  const components: OpenApi.IComponents = {
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
  const downgraded: Record<string, SwaggerV2.IJsonSchema> = {};
  const schema: SwaggerV2.IJsonSchema = OpenApiConverter.downgradeSchema({
    components,
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
    version: "2.0",
    downgraded,
  });
  TestEquality.equals(
    "nullable",
    {
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
          required: ["name", "age"],
          "x-nullable": true,
        },
      },
      schema: {
        $ref: "#/definitions/Member.Nullable",
      },
    },
    {
      schemas: downgraded,
      schema,
    } as any,
  );
};
