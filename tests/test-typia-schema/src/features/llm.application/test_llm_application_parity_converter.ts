import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies native JSON and LLM applications for the animal service are
 * connected to LlmSchemaConverter.parameters and compared for both parameter
 * and output schemas. The output UUID property also matches an independent
 * literal fragment.
 *
 * Input animal union, constrained metadata dictionary, UUID output and the
 * second output conversion all remain compared. Both function declarations and
 * the output schema are required before conversion; JSON serialization ignores
 * undefined representation fields.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native JSON and LLM applications for the animal service are connected to LlmSchemaConverter.parameters and compared for both parameter and output schemas. The output UUID property also matches an independent literal fragment.
 * @evidence contracts/testing.md#independent-expectations The converter consumes native JSON metadata, so full equality is cross-owner parity and can hide correlated analysis errors. The handwritten output id fragment independently requires string/uuid; application_schema_converter_matrix and schema_spec_union pin additional authored fields and discriminator values.
 * @evidence contracts/testing.md#distinguishing-cases Input animal union, constrained metadata dictionary, UUID output and the second output conversion all remain compared. Both function declarations and the output schema are required before conversion; JSON serialization ignores undefined representation fields.
 * @evidence contracts/testing.md#execution-ownership test_llm_application_parity_converter is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.json.application, typia.llm.application through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.json.application, typia.llm.application call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Input animal union, constrained metadata dictionary, UUID output and the second output conversion all remain compared. Both function declarations and the output schema are required before conversion; JSON serialization ignores undefined representation fields. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_application_parity_converter = (): void => {
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
  type IAnimal = ICat | IDog;
  interface ICreateInput {
    animal: IAnimal;
    metadata: Record<string, string & tags.MinLength<1>>;
  }
  interface ICreateOutput {
    id: string & tags.Format<"uuid">;
    animal: IAnimal;
  }
  interface IAnimalService {
    /**
     * Create an animal record.
     *
     * Stores the selected animal variant.
     */
    create(input: ICreateInput): ICreateOutput;
  }

  const json: IJsonSchemaApplication = typia.json.application<IAnimalService>();
  const actual = typia.llm.application<IAnimalService>();
  const jsonFunction = json.functions.find((f) => f.name === "create");
  const actualFunction = actual.functions.find((f) => f.name === "create");

  TestValidator.predicate(
    "json function exists",
    () => jsonFunction !== undefined,
  );
  TestValidator.predicate(
    "actual function exists",
    () => actualFunction !== undefined,
  );
  if (jsonFunction === undefined || actualFunction === undefined) return;

  const parameter = jsonFunction.parameters[0];
  const parameters = LlmSchemaConverter.parameters({
    config: { strict: false },
    components: json.components as OpenApi.IComponents,
    schema: {
      ...(parameter?.schema ?? emptyObject()),
      title: parameter?.schema.title ?? parameter?.title,
      description: parameter?.schema.description ?? parameter?.description,
    } as OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference,
  });
  if (parameters.success === false)
    throw new Error(JSON.stringify(parameters.error, null, 2));

  const outputSchema = jsonFunction.output?.schema;
  if (outputSchema === undefined) throw new Error("Missing output schema.");
  const output = LlmSchemaConverter.parameters({
    config: { strict: false },
    components: json.components as OpenApi.IComponents,
    schema: {
      ...outputSchema,
      description: outputSchema.description ?? jsonFunction.output?.description,
    } as OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference,
  });
  if (output.success === false)
    throw new Error(JSON.stringify(output.error, null, 2));

  TestEquality.equals(
    "application parameters",
    clean(actualFunction.parameters),
    clean(parameters.value),
  );
  TestEquality.equals(
    "application output",
    clean(actualFunction.output),
    clean(output.value),
  );

  TestEquality.equals(
    "declared output UUID field",
    actualFunction.output?.properties.id,
    { type: "string", format: "uuid" },
  );
};

const emptyObject = (): OpenApi.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  additionalProperties: false,
  required: [],
});

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
