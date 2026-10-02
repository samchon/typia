import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies native animal schemas connect to inversion and native JSON parity,
 * while discriminator mappings and strict format/length/pattern restored
 * fragments are also pinned literally.
 *
 * Nullable named animal union, referenced definitions, discriminator
 * preservation, strict format-versus-pattern paths and description consumption
 * remain separate. stripXDiscriminator removes only the extension for parity
 * and its value is checked independently.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native animal schemas connect to inversion and native JSON parity, while discriminator mappings and strict format/length/pattern restored fragments are also pinned literally.
 * @evidence contracts/testing.md#independent-expectations Full graph parity shares native metadata and may miss correlated losses. Handwritten discriminator paths, UUID/36-length and numeric-free pattern fragment plus consumed descriptions independently establish the asserted inversion meaning.
 * @evidence contracts/testing.md#distinguishing-cases Nullable named animal union, referenced definitions, discriminator preservation, strict format-versus-pattern paths and description consumption remain separate. stripXDiscriminator removes only the extension for parity and its value is checked independently.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_parity_invert is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.json.schemas, typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.json.schemas, typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Nullable named animal union, referenced definitions, discriminator preservation, strict format-versus-pattern paths and description consumption remain separate. stripXDiscriminator removes only the extension for parity and its value is checked independently. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
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
