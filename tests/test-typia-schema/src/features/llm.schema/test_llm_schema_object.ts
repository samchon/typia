import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_llm_schema_object = (): void => {
  interface IMember {
    id: number;
    name: string;
    email?: string;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IMember>($defs);

  // named type returns $ref
  TestValidator.predicate("is reference", () => LlmTypeChecker.isReference(schema));

  // actual schema in $defs
  TestValidator.predicate("$defs has IMember", () => "IMember" in $defs);

  const member = $defs["IMember"];
  if (member && LlmTypeChecker.isObject(member)) {
    TestValidator.predicate("has id property", () => "id" in member.properties);
    TestValidator.predicate("has name property", () => "name" in member.properties);
    TestValidator.predicate("has email property", () => "email" in member.properties);

    TestValidator.predicate("id is required", () =>
      member.required?.includes("id") ?? false,
    );
    TestValidator.predicate("email is optional", () =>
      !(member.required?.includes("email") ?? false),
    );

    TestValidator.predicate("id is number", () =>
      LlmTypeChecker.isNumber(member.properties["id"]!),
    );
  }
};
