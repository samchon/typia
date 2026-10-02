import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies native LLM generation preserves named and raw discriminated unions.
 *
 * A named union must remain a shared definition while a raw union returns its
 * branches directly. Runtime converter units cannot establish that the native
 * type analyzer and emitter assemble these two forms correctly.
 *
 * 1. Generate the named cat/dog union and retain its exact reference, mapping and
 *    cat field comparisons.
 * 2. Generate the former raw cat/ant scenario in the same host and compare its two
 *    exact references, mapping and variant-specific fields.
 *
 * @evidence contracts/testing.md#behavioral-verification Native schema generation preserves named cat/dog and raw cat/ant union forms, with exact literal references, discriminator mappings and complete variant-specific definitions.
 * @evidence contracts/testing.md#independent-expectations Handwritten discriminator names/values, reference targets and fields follow each declared variant independently of the native emitter. clean normalizes JSON representation; sorting raw branches only normalizes union membership order.
 * @evidence contracts/testing.md#distinguishing-cases Named referenced union versus raw inline union, cat/dog versus cat/ant mappings, boolean variant fields and ant role literals remain distinct. Original raw discriminator predicate and strengthened full mapping/field checks survive.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_spec_union is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The real native analyzer/emitter must connect TypeScript named/raw unions to runtime schema values and definitions. Direct LlmSchemaConverter.invert units cannot detect a missing rewrite or incorrect native union assembly. This extends the existing spec-union boundary instead of keeping a producer-only utility case.
 * @evidence contracts/e2e.md#shared-execution Named and raw generation run in the existing schema workspace's host and reuse its content-keyed native plugin artifact; no additional project, installation or per-rule native build is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each generation receives its own local definition object and declarations. The shared compiler owns its process and native artifact cache keyed by plugin source; this test owns no handles or persistent mutable state and does not assert cold-cache behavior.
 * @evidence contracts/e2e.md#preserved-coverage All original spec-union comparisons remain. The former utility discriminator predicate now runs on a raw native-generated union here, strengthened with exact references and fields. Its original inversion predicate and complete mapping/component comparisons execute in the plugin-free test_llm_schema_discriminator unit; no meaningful assertion is replaced by a fixture-presence check.
 */
export const test_llm_schema_spec_union = (): void => {
  interface ICat {
    type: "cat";
    name: string;
    meow: boolean;
  }
  interface IDog {
    type: "dog";
    name: string;
    bark: boolean;
  }
  type IAnimal = ICat | IDog;

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IAnimal>($defs);
  TestEquality.equals("union top ref", clean(schema), {
    $ref: "#/$defs/IAnimal",
  });
  TestEquality.equals("union discriminator", clean($defs.IAnimal), {
    anyOf: [
      {
        $ref: "#/$defs/ICat",
      },
      {
        $ref: "#/$defs/IDog",
      },
    ],
    "x-discriminator": {
      propertyName: "type",
      mapping: {
        cat: "#/$defs/ICat",
        dog: "#/$defs/IDog",
      },
    },
  });
  TestEquality.equals("cat literal property", clean($defs.ICat), {
    type: "object",
    properties: {
      meow: {
        type: "boolean",
      },
      name: {
        type: "string",
      },
      type: {
        type: "string",
        enum: ["cat"],
      },
    },
    required: ["type", "name", "meow"],
    additionalProperties: false,
  });
  {
    interface IRawCat {
      type: "cat";
      name: string;
      ribbon: boolean;
    }
    interface IRawAnt {
      type: "ant";
      name: string;
      role: "queen" | "soldier" | "worker";
    }
    const $defs: Record<string, ILlmSchema> = {};
    const schema: ILlmSchema = typia.llm.schema<IRawCat | IRawAnt>($defs);
    TestValidator.predicate(
      "discriminator",
      () =>
        LlmTypeChecker.isAnyOf(schema) &&
        schema["x-discriminator"] !== undefined &&
        schema["x-discriminator"].mapping !== undefined &&
        Object.values(schema["x-discriminator"].mapping).every((k) =>
          k.startsWith("#/$defs/"),
        ),
    );

    TestEquality.equals(
      "raw union shape",
      clean({
        ...schema,
        anyOf: LlmTypeChecker.isAnyOf(schema)
          ? [...schema.anyOf].sort((x, y) =>
              JSON.stringify(x).localeCompare(JSON.stringify(y)),
            )
          : undefined,
      }),
      {
        anyOf: [{ $ref: "#/$defs/IRawAnt" }, { $ref: "#/$defs/IRawCat" }],
        "x-discriminator": {
          propertyName: "type",
          mapping: { cat: "#/$defs/IRawCat", ant: "#/$defs/IRawAnt" },
        },
      },
    );
    TestEquality.equals("raw cat fields", clean($defs.IRawCat), {
      type: "object",
      properties: {
        type: { type: "string", enum: ["cat"] },
        name: { type: "string" },
        ribbon: { type: "boolean" },
      },
      required: ["type", "name", "ribbon"],
      additionalProperties: false,
    });
    TestEquality.equals("raw ant fields", clean($defs.IRawAnt), {
      type: "object",
      properties: {
        type: { type: "string", enum: ["ant"] },
        name: { type: "string" },
        role: { type: "string", enum: ["queen", "soldier", "worker"] },
      },
      required: ["type", "name", "role"],
      additionalProperties: false,
    });
  }
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
