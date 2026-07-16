import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { LlmSchemaConverter, OpenApiTypeChecker } from "@typia/utils";
import { ILlmSchema } from "typia";

export const test_llm_invert_openapi_component_names = (): void => {
  const keys: string[] = [
    "Legal.Control",
    "A-B",
    "A_B",
    "Taken",
    "",
    "/",
    "~",
    "%",
    "#",
    " ",
    "Café",
    "_x2F_",
    "//",
    "_x2F_/",
  ];
  const propertyByKey: Map<string, string> = new Map(
    keys.map((key, index) => [key, `case${index}`]),
  );
  const convert = (ordered: string[]): IConversion => {
    const $defs: Record<string, ILlmSchema> = Object.fromEntries(
      ordered.map((key) => [
        key,
        key === "/"
          ? {
              type: "object",
              properties: {
                next: { $ref: writeLlmReference(key) },
              },
              required: [],
              additionalProperties: false,
              description: describe(key),
            }
          : {
              type: "string",
              description: describe(key),
            },
      ]),
    );
    const components: OpenApi.IComponents = {
      schemas: {
        Taken: { type: "boolean", description: "pre-existing Taken" },
        _x2F_: { type: "boolean", description: "pre-existing escape" },
      },
    };
    const schema: ILlmSchema.IObject = {
      type: "object",
      properties: Object.fromEntries(
        ordered.map((key) => [
          propertyByKey.get(key)!,
          { $ref: writeLlmReference(key) },
        ]),
      ),
      required: [],
      additionalProperties: false,
    };
    const inverted: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
      components,
      $defs,
      schema: {
        ...schema,
        properties: {
          ...schema.properties,
          choice: {
            anyOf: [
              { $ref: writeLlmReference("#") },
              { $ref: writeLlmReference("Café") },
            ],
            "x-discriminator": {
              propertyName: "kind",
              mapping: {
                hash: writeLlmReference("#"),
                unicode: writeLlmReference("Café"),
              },
            },
          },
        },
      },
    });
    if (OpenApiTypeChecker.isObject(inverted) === false)
      throw new Error("LLM inversion did not return an object schema.");
    return { components, inverted };
  };

  const first: IConversion = convert(keys);
  const second: IConversion = convert([...keys].reverse());
  for (const [label, conversion] of [
    ["forward", first],
    ["reverse", second],
  ] as const) {
    const schemas: Record<string, OpenApi.IJsonSchema> =
      conversion.components.schemas ?? {};
    TestValidator.predicate(
      `${label}: every component name satisfies the OpenAPI grammar`,
      () => Object.keys(schemas).every((key) => /^[a-zA-Z0-9.\-_]+$/.test(key)),
    );
    TestValidator.equals(
      `${label}: an existing legal component is not overwritten`,
      schemas.Taken,
      { type: "boolean", description: "pre-existing Taken" },
    );
    TestValidator.equals(
      `${label}: an existing escape-shaped component is not overwritten`,
      schemas._x2F_,
      { type: "boolean", description: "pre-existing escape" },
    );
    for (const key of keys) {
      const property: OpenApi.IJsonSchema | undefined =
        conversion.inverted.properties?.[propertyByKey.get(key)!];
      TestValidator.predicate(
        `${label}: ${JSON.stringify(key)} has a local component reference`,
        () =>
          property !== undefined && OpenApiTypeChecker.isReference(property),
      );
      if (
        property === undefined ||
        OpenApiTypeChecker.isReference(property) === false
      )
        continue;
      const target: OpenApi.IJsonSchema | undefined = resolveLocalReference(
        conversion.components,
        property.$ref,
      );
      TestValidator.equals(
        `${label}: ${JSON.stringify(key)} resolves to its own definition`,
        target?.description,
        describe(key),
      );
      if (key === "/") {
        const next: OpenApi.IJsonSchema | undefined =
          target !== undefined && OpenApiTypeChecker.isObject(target)
            ? target.properties?.next
            : undefined;
        TestValidator.predicate(
          `${label}: recursive reference reuses the allocated component`,
          () =>
            next !== undefined &&
            OpenApiTypeChecker.isReference(next) &&
            next.$ref === property.$ref,
        );
      }
    }

    const choice: OpenApi.IJsonSchema | undefined =
      conversion.inverted.properties?.choice;
    TestValidator.predicate(
      `${label}: discriminator mapping references legal components`,
      () =>
        choice !== undefined &&
        OpenApiTypeChecker.isOneOf(choice) &&
        choice.discriminator?.mapping !== undefined &&
        Object.values(choice.discriminator.mapping).every(
          (reference) =>
            resolveLocalReference(conversion.components, reference) !==
            undefined,
        ),
    );
  }

  TestValidator.equals(
    "component allocation is independent of definition and traversal order",
    collectReferences(first),
    collectReferences(second),
  );
  TestValidator.equals(
    "legal component names are preserved when available",
    Object.fromEntries(
      ["Legal.Control", "A-B", "A_B"].map((key) => [
        key,
        collectReferences(first)[propertyByKey.get(key)!],
      ]),
    ),
    {
      "Legal.Control": "#/components/schemas/Legal.Control",
      "A-B": "#/components/schemas/A-B",
      A_B: "#/components/schemas/A_B",
    },
  );
};

interface IConversion {
  components: OpenApi.IComponents;
  inverted: OpenApi.IJsonSchema.IObject;
}

const collectReferences = (
  conversion: IConversion,
): Record<string, string | undefined> =>
  Object.fromEntries(
    Object.entries(conversion.inverted.properties ?? {})
      .filter(([key]) => key.startsWith("case"))
      .sort(([x], [y]) => x.localeCompare(y))
      .map(([key, schema]) => [
        key,
        OpenApiTypeChecker.isReference(schema) ? schema.$ref : undefined,
      ]),
  );

const describe = (key: string): string => `definition ${JSON.stringify(key)}`;

const writeLlmReference = (key: string): string =>
  `#/$defs/${encodeURIComponent(key.replace(/~/g, "~0").replace(/\//g, "~1"))}`;

const resolveLocalReference = (
  components: OpenApi.IComponents,
  reference: string,
): OpenApi.IJsonSchema | undefined => {
  if (reference.startsWith("#/") === false) return undefined;
  let current: unknown = { components };
  let pointer: string;
  try {
    pointer = decodeURIComponent(reference.slice(2));
  } catch {
    return undefined;
  }
  for (const token of pointer.split("/")) {
    const key: string = token.replace(/~1/g, "/").replace(/~0/g, "~");
    if (typeof current !== "object" || current === null) return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current as OpenApi.IJsonSchema | undefined;
};
