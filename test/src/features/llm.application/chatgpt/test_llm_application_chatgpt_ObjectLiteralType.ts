import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_application_chatgpt_ObjectLiteralType =
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectLiteralType",
  })(typia.llm.application<ObjectLiteralTypeApplication, "chatgpt">());

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
