import { OpenApi, OpenApiTypeChecker } from "@samchon/openapi";
import typia, { IJsonSchemaUnit } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_pr_1714_json_schema_plugin_by_jsDocTags = (): void => {
  const unit: IJsonSchemaUnit = typia.json.schema<ISomething>();
  const something: OpenApi.IJsonSchema | undefined =
    unit.components.schemas?.["ISomething"];
  if (something === undefined)
    throw new Error("Failed to generate JSON schema for ISomething.");
  else if (OpenApiTypeChecker.isObject(something) === false)
    throw new Error("Generated JSON schema for ISomething is not an object.");

  TestValidator.equals("x-autobe-database-schema")(
    (something as any)?.["x-autobe-database-schema"],
  )("somethings");
  TestValidator.equals("x-custom-tag")(
    (something.properties?.id as any)?.["x-custom-tag"],
  )(3);
  TestValidator.equals("x-valid")(
    (something.properties?.id as any)?.["x-valid"],
  )(true);
  TestValidator.equals("regular tag")(
    (something.properties?.id as any)?.["regular"],
  )(undefined);
};

/**
 * Something DTO.
 *
 * @x-autobe-database-schema somethings
 */
interface ISomething {
  /**
   * Primary Key.
   *
   * @x-autobe-database-schema-member id
   * @x-custom-tag 3
   * @x-valid true
   * @regular This is a regular tag and should be ignored.
   */
  id: string;
}
