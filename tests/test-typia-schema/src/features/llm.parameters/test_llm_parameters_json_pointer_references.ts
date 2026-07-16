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
