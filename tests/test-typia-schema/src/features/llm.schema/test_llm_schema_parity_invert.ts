import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies llm schema parity invert against the native typia.json.schemas,
 * typia.llm.schema output.
 *
 * The case builds its input in this file and asserts inverted schema, inverted
 * components, x-discriminator preserved, strict description inversion
 * constraints, strict descriptor tags consumed, strict description inversion
 * pattern.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schemas, typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 7 assertions (inverted schema; inverted components; x-discriminator preserved; strict description inversion constraints; strict descriptor tags consumed; strict description inversion pattern).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (inverted schema; inverted components; x-discriminator preserved; strict description inversion constraints; strict descriptor tags consumed; strict description inversion pattern) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_parity_invert is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_parity_invert = (): void => {
  interface ICat {
    type: "cat";
    name: string & tags.MinLength<1>;
    meow: boolean;
  }
  interface IDog {
    type: "dog";
    name: string & tags.MinLength<1>;
    bark: boolean;
  }
  type IAnimal = ICat | IDog | null;

  const collection: IJsonSchemaCollection = typia.json.schemas<[IAnimal]>();
  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IAnimal>($defs);
  const components: OpenApi.IComponents = {};
  const inverted = LlmSchemaConverter.invert({
    components,
    schema,
    $defs,
  });

  TestEquality.equals(
    "inverted schema",
    clean(inverted),
    clean(collection.schemas[0]),
  );
  TestEquality.equals(
    "inverted components",
    stripXDiscriminator(components),
    clean(collection.components),
  );
  TestEquality.equals(
    "x-discriminator preserved",
    clean(
      (
        components.schemas?.IAnimal as
          | (OpenApi.IJsonSchema.IOneOf & {
              "x-discriminator"?: unknown;
            })
          | undefined
      )?.["x-discriminator"],
    ),
    {
      propertyName: "type",
      mapping: {
        cat: "#/$defs/ICat",
        dog: "#/$defs/IDog",
      },
    },
  );

  const strict = typia.llm.schema<
    string & tags.Format<"uuid"> & tags.MinLength<36> & tags.MaxLength<36>,
    { strict: true }
  >({});
  const strictInverted = LlmSchemaConverter.invert({
    config: { strict: true },
    components: {},
    schema: strict,
    $defs: {},
  }) as OpenApi.IJsonSchema.IString;
  TestEquality.equals(
    "strict description inversion constraints",
    clean({
      type: strictInverted.type,
      format: strictInverted.format,
      minLength: strictInverted.minLength,
      maxLength: strictInverted.maxLength,
    }),
    clean({
      type: "string",
      format: "uuid",
      minLength: 36,
      maxLength: 36,
    } satisfies typeof strictTargetSchema),
  );
  TestEquality.equals(
    "strict descriptor tags consumed",
    strictInverted.description,
    undefined,
  );

  // Format and Pattern are mutually exclusive tags, so the pattern round-trips
  // through strict inversion on its own string.
  const strictPattern = typia.llm.schema<
    string & tags.Pattern<"^[0-9a-f-]+$">,
    { strict: true }
  >({});
  const strictPatternInverted = LlmSchemaConverter.invert({
    config: { strict: true },
    components: {},
    schema: strictPattern,
    $defs: {},
  }) as OpenApi.IJsonSchema.IString;
  TestEquality.equals(
    "strict description inversion pattern",
    clean({
      type: strictPatternInverted.type,
      pattern: strictPatternInverted.pattern,
    }),
    clean({
      type: "string",
      pattern: "^[0-9a-f-]+$",
    } satisfies { type: "string"; pattern: string }),
  );
  TestEquality.equals(
    "strict pattern descriptor tags consumed",
    strictPatternInverted.description,
    undefined,
  );
};

declare const strictTargetSchema: {
  type: "string";
  format: "uuid";
  minLength: 36;
  maxLength: 36;
};

const stripXDiscriminator = <T>(value: T): T => {
  const cloned: T = clean(value);
  const visit = (input: unknown): void => {
    if (Array.isArray(input)) input.forEach(visit);
    else if (input !== null && typeof input === "object") {
      delete (input as Record<string, unknown>)["x-discriminator"];
      Object.values(input).forEach(visit);
    }
  };
  visit(cloned);
  return cloned;
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
