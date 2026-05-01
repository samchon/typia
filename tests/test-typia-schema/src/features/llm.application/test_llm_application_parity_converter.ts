import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaApplication, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

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

  TestValidator.equals(
    "application parameters",
    clean(actualFunction.parameters),
    clean(parameters.value),
  );
  TestValidator.equals(
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
