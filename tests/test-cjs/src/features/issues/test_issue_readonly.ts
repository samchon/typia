import { OpenApi, OpenApiTypeChecker } from "@samchon/openapi";
import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_readonly = () => {
  const schema: OpenApi.IJsonSchema = typia.json.schema<{
    readonly id: string;
    readonly values: number[];
    readonly nullable: boolean | null;
  }>().schema;
  if (OpenApiTypeChecker.isObject(schema) === false)
    throw new Error("must be object type");
  TestValidator.predicate("all readonly")(() =>
    Object.values(schema.properties ?? {}).every((p) => !!p.readOnly),
  );
};
