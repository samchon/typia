import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia from "typia";

/**
 * Verifies native LLM generation emits canonical local `$defs` references.
 *
 * Recursive generic names can contain JSON Pointer and URI-fragment reserved
 * characters. The generated definition keys remain unchanged while each local
 * reference encodes that key as one RFC 6901 token.
 *
 * 1. Generate recursive definitions containing reserved and Unicode text.
 * 2. Collect every local reference and discriminator mapping from the graph.
 * 3. Match unchanged keys with their canonical URI-fragment references.
 *
 * @evidence contracts/testing.md#behavioral-verification Native recursive and discriminated definitions keep their literal keys while all expected references and discriminator mappings use canonical URI-fragment/JSON Pointer encoding.
 * @evidence contracts/testing.md#independent-expectations The handwritten key/reference pairs follow RFC 6901 token escaping plus URI percent encoding for slash, tilde, percent and Unicode; no production encoder computes the expected strings.
 * @evidence contracts/testing.md#distinguishing-cases Plain, slash, tilde, combined, escape-order, percent and Unicode names cover encoding boundaries, while recursive children and discriminator mappings exercise multiple reference owners. The local collector visits objects, arrays, unions and definitions.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_json_pointer_references is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Plain, slash, tilde, combined, escape-order, percent and Unicode names cover encoding boundaries, while recursive children and discriminator mappings exercise multiple reference owners. The local collector visits objects, arrays, unions and definitions. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_json_pointer_references = (): void => {
  type Recursive<T extends string> = {
    value: T;
    children: Recursive<T>[];
  };
  interface IVariant<T extends string> {
    kind: T;
    value: number;
  }
  interface IArguments {
    slash: Recursive<"A/B">;
    tilde: Recursive<"T~N">;
    combined: Recursive<"A~/B">;
    pointerOrder: Recursive<"~1">;
    percent: Recursive<"C%D">;
    unicode: Recursive<"Café">;
    plain: Recursive<"Plain">;
    discriminated: IVariant<"A/B"> | IVariant<"T~N">;
  }

  const parameters: ILlmSchema.IParameters = typia.llm.parameters<IArguments>();
  const expected = [
    ["RecursiveA/B", "#/$defs/RecursiveA~1B"],
    ["RecursiveT~N", "#/$defs/RecursiveT~0N"],
    ["RecursiveA~/B", "#/$defs/RecursiveA~0~1B"],
    ["Recursive~1", "#/$defs/Recursive~01"],
    ["RecursiveC%D", "#/$defs/RecursiveC%25D"],
    ["RecursiveCafé", "#/$defs/RecursiveCaf%C3%A9"],
    ["RecursivePlain", "#/$defs/RecursivePlain"],
    ["IVariantA/B", "#/$defs/IVariantA~1B"],
    ["IVariantT~N", "#/$defs/IVariantT~0N"],
  ] as const;

  const refs: string[] = [];
  const mappings: Record<string, string>[] = [];
  const collect = (schema: ILlmSchema): void => {
    if ("$ref" in schema) refs.push(schema.$ref);
    else if ("anyOf" in schema) {
      if (schema["x-discriminator"]?.mapping !== undefined)
        mappings.push(schema["x-discriminator"].mapping);
      schema.anyOf.forEach(collect);
    } else if (schema.type === "object") {
      Object.values(schema.properties).forEach(collect);
      if (
        typeof schema.additionalProperties === "object" &&
        schema.additionalProperties !== null
      )
        collect(schema.additionalProperties);
    } else if (schema.type === "array") collect(schema.items);
  };
  collect(parameters);
  Object.values(parameters.$defs).forEach(collect);

  for (const [key, $ref] of expected) {
    TestValidator.predicate(`owns definition ${key}`, () =>
      Object.hasOwn(parameters.$defs, key),
    );
    TestValidator.predicate(`emits canonical reference ${$ref}`, () =>
      refs.includes($ref),
    );
  }
  TestValidator.predicate("encodes discriminator mapping references", () =>
    mappings.some(
      (mapping) =>
        mapping["A/B"] === "#/$defs/IVariantA~1B" &&
        mapping["T~N"] === "#/$defs/IVariantT~0N",
    ),
  );
};
