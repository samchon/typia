import { TestValidator } from "@nestia/e2e";
import { ILlmApplication, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies llm application schema converter matrix against the native
 * typia.llm.application output.
 *
 * The case builds its input in this file and asserts create function exists,
 * function description, application parameters are strict, application
 * parameter required, input animal anyOf, input animal variants.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 17 assertions (create function exists; function description; application parameters are strict; application parameter required; input animal anyOf; input animal variants).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (create function exists; function description; application parameters are strict; application parameter required; input animal anyOf; input animal variants) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_schema_converter_matrix is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
