import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3 } from "@samchon/openapi";
import { OpenApiV3Downgrader } from "@samchon/openapi/src/converters/OpenApiV3Downgrader";

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
  const schema: OpenApiV3.IJsonSchema = OpenApiV3Downgrader.downgradeSchema({
    original,
    downgraded: components,
  })({
    oneOf: [
      {
        type: "boolean",
      },
      {
        $ref: "#/components/schemas/union",
      },
    ],
  } satisfies OpenApi.IJsonSchema);
  TestValidator.equals(
    "nullable",
    {
      components: {},
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
  const schema: OpenApiV3.IJsonSchema = OpenApiV3Downgrader.downgradeSchema({
    original,
    downgraded: components,
  })({
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
  } satisfies OpenApi.IJsonSchema);
  TestValidator.equals(
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
  const schema: OpenApiV3.IJsonSchema = OpenApiV3Downgrader.downgradeSchema({
    original,
    downgraded: components,
  })({
    oneOf: [
      {
        $ref: "#/components/schemas/Member",
      },
      {
        type: "null",
      },
    ],
  } satisfies OpenApi.IJsonSchema);
  TestValidator.equals(
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
