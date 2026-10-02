import { TestValidator } from "@nestia/e2e";
import { ILlmApplication, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies the native animal-service application retains method documentation,
 * parameter required names, cat/dog union discrimination, dictionary string
 * constraints and UUID output fields.
 *
 * Input/output object shells, referenced union definitions, dynamic metadata
 * values and output format are separately asserted. Shape predicates precede
 * narrower field checks, so a wrong schema branch cannot bypass them.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The native animal-service application retains method documentation, parameter required names, cat/dog union discrimination, dictionary string constraints and UUID output fields.
 * @evidence contracts/testing.md#independent-expectations Handwritten expected required names, discriminator type, variant count, MinLength<1> and UUID format come from the local interfaces and tags, not from another generated schema.
 * @evidence contracts/testing.md#distinguishing-cases Input/output object shells, referenced union definitions, dynamic metadata values and output format are separately asserted. Shape predicates precede narrower field checks, so a wrong schema branch cannot bypass them.
 * @evidence contracts/testing.md#execution-ownership test_llm_application_schema_converter_matrix is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.application through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.application call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Input/output object shells, referenced union definitions, dynamic metadata values and output format are separately asserted. Shape predicates precede narrower field checks, so a wrong schema branch cannot bypass them. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_application_schema_converter_matrix = (): void => {
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
  type Animal = ICat | IDog;

  interface ICreateInput {
    animal: Animal;
    metadata: Record<string, string & tags.MinLength<1>>;
  }
  interface ICreateOutput {
    id: string & tags.Format<"uuid">;
    animal: Animal;
  }
  interface IAnimalService {
    /**
     * Create an animal record.
     *
     * Stores the selected animal variant.
     */
    create(input: ICreateInput): ICreateOutput;
  }

  const app: ILlmApplication = typia.llm.application<IAnimalService>();
  const func = app.functions.find((f) => f.name === "create");
  TestValidator.predicate("create function exists", () => func !== undefined);
  if (func === undefined) return;

  TestValidator.predicate(
    "function description",
    () =>
      !!func.description?.includes("Create an animal record") &&
      func.description.includes("Stores the selected animal variant."),
  );

  const params = func.parameters;
  TestEquality.equals(
    "application parameters are strict",
    false,
    params.additionalProperties,
  );
  TestEquality.equals(
    "application parameter required",
    sorted(params.required),
    ["animal", "metadata"],
  );

  const inputAnimal = resolve(params.properties.animal, params.$defs);
  TestValidator.predicate("input animal anyOf", () => isAnyOf(inputAnimal));
  if (isAnyOf(inputAnimal)) {
    TestEquality.equals("input animal variants", inputAnimal.anyOf.length, 2);
    TestEquality.equals(
      "input animal discriminator",
      inputAnimal["x-discriminator"]?.propertyName,
      "type",
    );
  }

  const metadata = resolve(params.properties.metadata, params.$defs);
  TestValidator.predicate("metadata object", () => isObject(metadata));
  if (isObject(metadata))
    TestEquality.equals(
      "metadata additionalProperties",
      metadata.additionalProperties,
      {
        type: "string",
        minLength: 1,
      },
    );

  TestValidator.predicate("output exists", () => func.output !== undefined);
  if (func.output === undefined) return;

  TestEquality.equals(
    "output additionalProperties",
    false,
    func.output.additionalProperties,
  );
  TestEquality.equals("output id format", func.output.properties.id, {
    type: "string",
    format: "uuid",
  });

  const outputAnimal = resolve(
    func.output.properties.animal,
    func.output.$defs,
  );
  TestValidator.predicate("output animal anyOf", () => isAnyOf(outputAnimal));
  if (isAnyOf(outputAnimal)) {
    TestEquality.equals("output animal variants", outputAnimal.anyOf.length, 2);
    TestEquality.equals(
      "output animal discriminator",
      outputAnimal["x-discriminator"]?.propertyName,
      "type",
    );
  }

  TestValidator.predicate("ICat input definition exists", () =>
    isObject(params.$defs.ICat),
  );
  TestValidator.predicate("IDog output definition exists", () =>
    isObject(func.output!.$defs.IDog),
  );
};

const sorted = (values: string[] | undefined): string[] =>
  [...(values ?? [])].sort();

const resolve = (
  schema: ILlmSchema | undefined,
  $defs: Record<string, ILlmSchema>,
): ILlmSchema | undefined => {
  if (!schema || !("$ref" in schema)) return schema;
  const key = schema.$ref.split("/").at(-1);
  return key === undefined ? undefined : $defs[key];
};

const isAnyOf = (schema: ILlmSchema | undefined): schema is ILlmSchema.IAnyOf =>
  !!schema && "anyOf" in schema && Array.isArray(schema.anyOf);

const isObject = (
  schema: ILlmSchema | undefined,
): schema is ILlmSchema.IObject =>
  !!schema && (schema as { type?: string }).type === "object";
