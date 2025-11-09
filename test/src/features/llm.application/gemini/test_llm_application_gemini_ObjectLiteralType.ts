import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_application_gemini_ObjectLiteralType = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ObjectLiteralType",
    factory: ObjectLiteralType,
  })(typia.llm.application<ObjectLiteralTypeApplication, "gemini">());

interface ObjectLiteralTypeApplication {
  insert(p: { first: ObjectLiteralType }): Promise<void>;
  reduce(p: {
    first: ObjectLiteralType;
    second: ObjectLiteralType | null;
  }): Promise<ObjectLiteralType>;
  coalesce(p: {
    first: ObjectLiteralType | null;
    second: ObjectLiteralType | null;
    third?: ObjectLiteralType | null;
  }): Promise<ObjectLiteralType | null>;
}
