import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_application_claude_ObjectLiteralType =
  _test_llm_application({
    model: "claude",
    name: "ObjectLiteralType",
  })(typia.llm.application<ObjectLiteralTypeApplication, "claude">());

interface ObjectLiteralTypeApplication {
  insert(first: ObjectLiteralType): Promise<void>;
  reduce(
    first: ObjectLiteralType,
    second: ObjectLiteralType | null,
  ): Promise<ObjectLiteralType>;
  coalesce(
    first: ObjectLiteralType | null,
    second: ObjectLiteralType | null,
    third?: ObjectLiteralType | null,
  ): Promise<ObjectLiteralType | null>;
}
