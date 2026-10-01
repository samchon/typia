import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaApplication, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies llm application parity converter against the native
 * typia.json.application, typia.llm.application output.
 *
 * The case builds its input in this file and asserts json function exists,
 * actual function exists, application parameters, application output.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.application, typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 7 assertions (json function exists; actual function exists; application parameters; application output).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (json function exists; actual function exists; application parameters; application output) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_parity_converter is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
};

const emptyObject = (): OpenApi.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  additionalProperties: false,
  required: [],
});

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
