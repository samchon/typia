import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

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
  TestValidator.equals(
    "nullable",
    {
      components: {},
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
  TestValidator.equals(
    "nullable",
    {
      components: {},
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
  TestValidator.equals(
    "nullable",
    {
      components: {},
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
