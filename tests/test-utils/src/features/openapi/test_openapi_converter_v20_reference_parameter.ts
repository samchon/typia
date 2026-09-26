import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies referenced non-body parameters survive a Swagger 2.0 round trip.
 *
 * A non-body parameter spreads its schema into itself, and in 2.0 a `$ref` item
 * in `parameters` names a parameter. A referenced schema therefore became `{
 * $ref: "#/definitions/X", name, in }`, which the upgrader looked up among the
 * document's parameters, did not find, and dropped without notice (#2441).
 * Every top-level reference behaved so, including a string enum alias, a
 * nullable reference rewritten to `X.Nullable`, and a reference carrying
 * sibling annotations. The oracle is the source document: nothing is dropped
 * and every schema reads back as the definition it referenced.
 *
 * 1. Downgrade query and header parameters referencing an object, a string enum, a
 *    nullable enum, and an annotated enum, with an inline array of references
 *    as the control.
 * 2. Assert no downgraded parameter keeps a top-level `$ref`, and upgrading
 *    returns every parameter with the resolved schema.
 * 3. Assert an unresolvable or cyclic reference throws the representability
 *    `TypeError` instead of being dropped, and that a nullable reference in a
 *    form field reads back too.
 */
export const test_openapi_converter_v20_reference_parameter = (): void => {
  const components: OpenApi.IComponents = {
    schemas: {
      IObject: {
        type: "object",
        properties: { a: { type: "string" } },
        required: ["a"],
      },
      Status: { type: "string", enum: ["on", "off"] } as OpenApi.IJsonSchema,
    },
  };
  const document = (
    parameters: OpenApi.IOperation.IParameter[],
    schemas: OpenApi.IComponents = components,
  ): OpenApi.IDocument => ({
    openapi: "3.2.0",
    "x-typia-emended-v12": true,
    info: { title: "test", version: "1.0.0" },
    components: schemas,
    paths: {
      "/r": {
        get: {
          parameters,
          responses: { 200: { description: "ok" } },
        },
      },
    },
  });
  const reference = (name: string): OpenApi.IJsonSchema.IReference => ({
    $ref: `#/components/schemas/${name}`,
  });
  const parameters: OpenApi.IOperation.IParameter[] = [
    {
      name: "object",
      in: "query",
      required: true,
      schema: reference("IObject"),
    },
    { name: "status", in: "query", schema: reference("Status") },
    {
      name: "nullable",
      in: "header",
      schema: { oneOf: [reference("Status"), { type: "null" }] },
    },
    {
      name: "described",
      in: "query",
      schema: { ...reference("Status"), description: "overridden" },
    },
    {
      name: "list",
      in: "query",
      schema: { type: "array", items: reference("Status") },
    },
  ];

  const swagger: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    document(parameters),
    "2.0",
  );
  const downgraded = swagger.paths!["/r"]!.get!.parameters!;
  TestEquality.equals(
    "no top-level reference",
    downgraded.filter((p) => "$ref" in p).length,
    0,
  );
  const upgraded: OpenApi.IDocument = OpenApiConverter.upgradeDocument(swagger);
  const read = Object.fromEntries(
    upgraded.paths!["/r"]!.get!.parameters!.map((p) => [p.name, p.schema]),
  );
  TestEquality.equals("every parameter survives", Object.keys(read), [
    "object",
    "status",
    "nullable",
    "described",
    "list",
  ]);
  TestEquality.equals("object", read.object, {
    type: "object",
    properties: { a: { type: "string" } },
  });
  TestEquality.equals("status", read.status, {
    oneOf: [{ const: "on" }, { const: "off" }],
  });
  TestEquality.equals("nullable", read.nullable, {
    oneOf: [{ const: "on" }, { const: "off" }, { type: "null" }],
  });
  // a non-body 2.0 parameter holds one description, so the annotation reads
  // back on the parameter
  TestEquality.equals("described", read.described, {
    oneOf: [{ const: "on" }, { const: "off" }],
  });
  TestEquality.equals(
    "described annotation",
    upgraded.paths!["/r"]!.get!.parameters!.find((p) => p.name === "described")
      ?.description,
    "overridden",
  );
  TestEquality.equals("list", read.list, {
    type: "array",
    items: reference("Status"),
  });

  // not representable: thrown, never dropped
  const rejects = (title: string, closure: () => unknown, message: string) =>
    TestValidator.predicate(title, () => {
      try {
        closure();
      } catch (error) {
        return error instanceof TypeError && error.message.includes(message);
      }
      return false;
    });
  rejects(
    "unresolvable",
    () =>
      OpenApiConverter.downgradeDocument(
        document([
          { name: "missing", in: "query", schema: reference("Missing") },
        ]),
        "2.0",
      ),
    "non-body parameter references must resolve",
  );
  rejects(
    "cyclic",
    () =>
      OpenApiConverter.downgradeDocument(
        document([{ name: "cyclic", in: "query", schema: reference("A") }], {
          schemas: { A: reference("B"), B: reference("A") },
        }),
        "2.0",
      ),
    "non-body parameter references must not form a cycle",
  );

  rejects(
    "self-referencing form array",
    () =>
      OpenApiConverter.downgradeDocument(
        {
          ...document([], {
            schemas: { A: { type: "array", items: reference("A") } },
          }),
          paths: {
            "/f": {
              post: {
                requestBody: {
                  required: true,
                  content: {
                    "multipart/form-data": {
                      schema: {
                        type: "object",
                        properties: { a: reference("A") },
                        required: ["a"],
                      },
                    },
                  },
                },
                responses: { 200: { description: "ok" } },
              },
            },
          },
        },
        "2.0",
      ),
    "non-body parameter references must not form a cycle",
  );

  // a form field is a non-body parameter too: a nullable reference, which
  // downgrades to a `.Nullable` definition reference, reads back as well
  const form: OpenApi.IDocument = {
    ...document([]),
    paths: {
      "/f": {
        post: {
          requestBody: {
            required: true,
            content: {
              "multipart/form-data": {
                schema: {
                  type: "object",
                  properties: {
                    status: { oneOf: [reference("Status"), { type: "null" }] },
                    statuses: {
                      type: "array",
                      items: { oneOf: [reference("Status"), { type: "null" }] },
                    },
                  },
                  required: ["status"],
                },
              },
            },
          },
          responses: { 200: { description: "ok" } },
        },
      },
    },
  };
  const formUpgraded: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
    OpenApiConverter.downgradeDocument(form, "2.0"),
  );
  TestEquality.equals(
    "nullable form reference",
    (
      formUpgraded.paths!["/f"]!.post!.requestBody!.content![
        "multipart/form-data"
      ]!.schema as OpenApi.IJsonSchema.IObject
    ).properties!.status,
    { oneOf: [{ const: "on" }, { const: "off" }, { type: "null" }] },
  );
  TestEquality.equals(
    "nullable form reference items",
    (
      formUpgraded.paths!["/f"]!.post!.requestBody!.content![
        "multipart/form-data"
      ]!.schema as OpenApi.IJsonSchema.IObject
    ).properties!.statuses,
    {
      type: "array",
      items: { oneOf: [{ const: "on" }, { const: "off" }, { type: "null" }] },
    },
  );
};
