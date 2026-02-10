import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, LlmTypeChecker, OpenApi } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection } from "typia";

export const test_llm_type_checker_cover_any = () => {
  const collection: IJsonSchemaCollection = typia.json.schemas<[IBasic]>();
  const result = LlmSchemaComposer.parameters({
    components: collection.components,
    schema: collection.schemas[0] as OpenApi.IJsonSchema.IReference,
  });
  if (result.success === false)
    throw new Error(`Failed to compose parameters.`);

  const parameters = result.value;
  const check = (x: ILlmSchema, y: ILlmSchema): boolean =>
    LlmTypeChecker.covers({
      x,
      y,
      $defs: parameters.$defs,
    });
  TestValidator.equals(
    "any covers (string | null)",
    true,
    check(parameters.properties.any!, parameters.properties.string_or_null!),
  );
  TestValidator.equals(
    "any covers (string | undefined)",
    true,
    check(
      parameters.properties.any!,
      parameters.properties.string_or_undefined!,
    ),
  );
};

interface IBasic {
  any: any;
  string_or_null: null | string;
  string_or_undefined: string | undefined;
}
