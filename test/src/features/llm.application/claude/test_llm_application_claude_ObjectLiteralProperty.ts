import typia from "typia";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_ObjectLiteralProperty = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ObjectLiteralProperty",
    factory: ObjectLiteralProperty
  })(
    typia.llm.application<ObjectLiteralPropertyApplication, "claude">(),
  );

interface ObjectLiteralPropertyApplication {
  insert(p: { first: ObjectLiteralProperty }): Promise<void>;
  reduce(p: { first: ObjectLiteralProperty, second: ObjectLiteralProperty | null }): Promise<ObjectLiteralProperty>;
  coalesce(p: {
    first: ObjectLiteralProperty | null,
    second: ObjectLiteralProperty | null,
    third?: ObjectLiteralProperty | null,
  }): Promise<ObjectLiteralProperty | null>;
}