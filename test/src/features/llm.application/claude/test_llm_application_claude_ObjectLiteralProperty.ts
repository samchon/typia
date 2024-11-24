import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_llm_application_claude_ObjectLiteralProperty =
  _test_llm_application({
    model: "claude",
    name: "ObjectLiteralProperty",
  })(typia.llm.application<ObjectLiteralPropertyApplication, "claude">());

interface ObjectLiteralPropertyApplication {
  insert(first: ObjectLiteralProperty): Promise<void>;
  reduce(
    first: ObjectLiteralProperty,
    second: ObjectLiteralProperty | null,
  ): Promise<ObjectLiteralProperty>;
  coalesce(
    first: ObjectLiteralProperty | null,
    second: ObjectLiteralProperty | null,
    third?: ObjectLiteralProperty | null,
  ): Promise<ObjectLiteralProperty | null>;
}
