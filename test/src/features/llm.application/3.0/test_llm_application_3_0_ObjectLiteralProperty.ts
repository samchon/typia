import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_llm_application_3_0_ObjectLiteralProperty =
  _test_llm_application({
    model: "3.0",
    name: "ObjectLiteralProperty",
  })(typia.llm.application<ObjectLiteralPropertyApplication, "3.0">());

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
