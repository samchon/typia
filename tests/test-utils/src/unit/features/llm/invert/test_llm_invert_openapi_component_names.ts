import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmSchemaConverter, OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies inverted component names stay legal, distinct and independent of
 * definition order.
 *
 * LLM definition keys may contain characters the OpenAPI Components Object key
 * grammar forbids. Inversion must allocate legal names, never merge two keys,
 * and give the same result whatever order the definitions arrive in.
 *
 * 1. Build definitions for legal controls and for slash, tilde, percent, space,
 *    unicode and escape-like keys.
 * 2. Invert them in several orders.
 * 3. Assert every allocated key is legal, keys stay distinct and the mapping is
 *    order independent.
 *
 * @evidence contracts/testing.md#behavioral-verification invert is run on definitions with problematic keys in several orders and the allocated component keys, their legality, distinctness and the property-to-key mapping are asserted.
 * @evidence contracts/testing.md#independent-expectations The Components Object key grammar defines legality and the authored key list defines distinctness; legal controls must keep their names.
 * @evidence contracts/testing.md#distinguishing-cases Legal controls, encoded keys and keys that collide after escaping (for example _x2F_ and /) are the rows, each checked for order independence.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The inversion runs in process on authored definitions with no native producer.
 */
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
    TestEquality.equals(
      `${label}: an existing legal component is not overwritten`,
      schemas.Taken,
      { type: "boolean", description: "pre-existing Taken" },
    );
    TestEquality.equals(
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
      TestEquality.equals(
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

  TestEquality.equals(
    "component allocation is independent of definition and traversal order",
    collectReferences(first),
    collectReferences(second),
  );
  TestEquality.equals(
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
