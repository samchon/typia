import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaApplication, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_application_parity_reference_description = (): void => {
  interface ICreateUserInput {
    id: string & tags.Format<"uuid">;
    name: string & tags.MinLength<1>;
  }
  interface ICreateUserOutput {
    id: string & tags.Format<"uuid">;
    created: boolean;
  }
  interface IUserService {
    create(input: ICreateUserInput): ICreateUserOutput;
  }

  const json: IJsonSchemaApplication = typia.json.application<IUserService>();
  const actual = typia.llm.application<IUserService>();
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

  const input = jsonFunction.parameters[0];
  const parameters = LlmSchemaConverter.parameters({
    config: { strict: false },
    components: json.components as OpenApi.IComponents,
    schema: {
      ...(input?.schema ?? emptyObject()),
      title: input?.schema.title ?? input?.title,
      description: input?.schema.description ?? input?.description,
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
    "parameters description",
    actualFunction.parameters.description,
    parameters.value.description,
  );
  TestValidator.equals(
    "output description",
    actualFunction.output?.description,
    output.value.description,
  );
};

const emptyObject = (): OpenApi.IJsonSchema.IObject => ({
  type: "object",
  properties: {},
  additionalProperties: false,
  required: [],
});
