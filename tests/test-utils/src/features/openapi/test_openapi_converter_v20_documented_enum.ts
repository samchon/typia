import { OpenApi, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies documented enumerations are typed in Swagger 2.0 non-body locations.
 *
 * Annotated constants downgrade to an `x-oneOf` of one-value enums, which keeps
 * each annotation and round-trips, but carries no `type`, so a 2.0 consumer
 * other than typia sees an untyped parameter, form field, or response header
 * (#2441). The same union is now also stated as `type` plus `enum`, with
 * `x-nullable` for a `null` member. The oracle is the source document for the
 * round trip and the official 2.0 field set (`type`, `enum`) for the typed
 * form.
 *
 * 1. Downgrade a documented enum as a query parameter, a nullable header
 *    parameter, an array query parameter, a form field, and a response header.
 * 2. Assert each carries `type` and `enum` beside `x-oneOf`.
 * 3. Assert upgrading returns the original annotated `oneOf`, and that a mixed
 *    union and a schema-level definition stay untouched.
 */
export const test_openapi_converter_v20_documented_enum = (): void => {
  const documented: OpenApi.IJsonSchema = {
    oneOf: [
      { const: "a", description: "First." },
      { const: "b", title: "Second" },
    ],
  };
  const nullable: OpenApi.IJsonSchema = {
    oneOf: [
      ...(documented as OpenApi.IJsonSchema.IOneOf).oneOf,
      { type: "null" },
    ],
  };
  const mixed: OpenApi.IJsonSchema = {
    oneOf: [
      { const: "a", description: "First." },
      { const: 1, description: "One." },
    ],
  };
  const source: OpenApi.IDocument = {
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    info: { title: "test", version: "1.0.0" },
    components: { schemas: { Documented: documented } },
    paths: {
      "/r": {
        get: {
          parameters: [
            {
              name: "documented",
              in: "query",
              required: true,
              schema: documented,
            },
            { name: "nullable", in: "header", schema: nullable },
            {
              name: "list",
              in: "query",
              schema: { type: "array", items: documented },
            },
            { name: "mixed", in: "query", schema: mixed },
          ],
          responses: {
            200: {
              description: "ok",
              headers: {
                "x-kind": { name: "x-kind", in: "header", schema: documented },
              },
            },
          },
        },
      },
      "/f": {
        post: {
          requestBody: {
            required: true,
            content: {
              "multipart/form-data": {
                schema: {
                  type: "object",
                  properties: { kind: nullable },
                  required: ["kind"],
                },
              },
            },
          },
          responses: { 200: { description: "ok" } },
        },
      },
    },
  };
  const swagger: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    source,
    "2.0",
  );
  const typed = (value: unknown) => {
    const {
      type,
      enum: values,
      "x-nullable": nullability,
    } = value as {
      type?: string;
      enum?: unknown[];
      "x-nullable"?: boolean;
    };
    return { type, enum: values, "x-nullable": nullability };
  };
  const parameters = Object.fromEntries(
    swagger.paths!["/r"]!.get!.parameters!.map((p) => [(p as any).name, p]),
  );
  TestEquality.equals("query", typed(parameters.documented), {
    type: "string",
    enum: ["a", "b"],
    "x-nullable": undefined,
  });
  TestEquality.equals("nullable header", typed(parameters.nullable), {
    type: "string",
    enum: ["a", "b"],
    "x-nullable": true,
  });
  TestEquality.equals("array items", typed((parameters.list as any).items), {
    type: "string",
    enum: ["a", "b"],
    "x-nullable": undefined,
  });
  TestEquality.equals("mixed stays untyped", typed(parameters.mixed), {
    type: undefined,
    enum: undefined,
    "x-nullable": undefined,
  });
  TestEquality.equals(
    "response header",
    typed(
      (
        swagger.paths!["/r"]!.get!
          .responses![200] as SwaggerV2.IOperation.IResponse
      ).headers!["x-kind"],
    ),
    { type: "string", enum: ["a", "b"], "x-nullable": undefined },
  );
  TestEquality.equals(
    "form field",
    typed(swagger.paths!["/f"]!.post!.parameters![0]),
    { type: "string", enum: ["a", "b"], "x-nullable": true },
  );
  TestEquality.equals(
    "definition untouched",
    typed(swagger.definitions!.Documented),
    { type: undefined, enum: undefined, "x-nullable": undefined },
  );

  // the round trip is unchanged
  const upgraded: OpenApi.IDocument = OpenApiConverter.upgradeDocument(swagger);
  const read = Object.fromEntries(
    upgraded.paths!["/r"]!.get!.parameters!.map((p) => [p.name, p.schema]),
  );
  TestEquality.equals("query round trip", read.documented, documented);
  TestEquality.equals("nullable round trip", read.nullable, nullable);
  TestEquality.equals("array round trip", read.list, {
    type: "array",
    items: documented,
  });
  TestEquality.equals("mixed round trip", read.mixed, mixed);
  TestEquality.equals(
    "header round trip",
    upgraded.paths!["/r"]!.get!.responses![200]!.headers!["x-kind"]!.schema,
    documented,
  );
  TestEquality.equals(
    "form round trip",
    (
      upgraded.paths!["/f"]!.post!.requestBody!.content!["multipart/form-data"]!
        .schema as OpenApi.IJsonSchema.IObject
    ).properties!.kind,
    nullable,
  );
};
