import { TestValidator } from "@nestia/e2e";
import { ILlmApplication, ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

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
  TestValidator.equals(
    "application parameters are strict",
    false,
    params.additionalProperties,
  );
  TestValidator.equals(
    "application parameter required",
    sorted(params.required),
    ["animal", "metadata"],
  );

  const inputAnimal = resolve(params.properties.animal, params.$defs);
  TestValidator.predicate("input animal anyOf", () => isAnyOf(inputAnimal));
  if (isAnyOf(inputAnimal)) {
    TestValidator.equals("input animal variants", inputAnimal.anyOf.length, 2);
    TestValidator.equals(
      "input animal discriminator",
      inputAnimal["x-discriminator"]?.propertyName,
      "type",
    );
  }

  const metadata = resolve(params.properties.metadata, params.$defs);
  TestValidator.predicate("metadata object", () => isObject(metadata));
  if (isObject(metadata))
    TestValidator.equals(
      "metadata additionalProperties",
      metadata.additionalProperties,
      {
        type: "string",
        minLength: 1,
      },
    );

  TestValidator.predicate("output exists", () => func.output !== undefined);
  if (func.output === undefined) return;

  TestValidator.equals(
    "output additionalProperties",
    false,
    func.output.additionalProperties,
  );
  TestValidator.equals("output id format", func.output.properties.id, {
    type: "string",
    format: "uuid",
  });

  const outputAnimal = resolve(
    func.output.properties.animal,
    func.output.$defs,
  );
  TestValidator.predicate("output animal anyOf", () => isAnyOf(outputAnimal));
  if (isAnyOf(outputAnimal)) {
    TestValidator.equals(
      "output animal variants",
      outputAnimal.anyOf.length,
      2,
    );
    TestValidator.equals(
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
