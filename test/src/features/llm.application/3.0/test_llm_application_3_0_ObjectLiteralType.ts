import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_application_3_0_ObjectLiteralType = _test_llm_application(
  {
    model: "3.0",
    name: "ObjectLiteralType",
  },
)(typia.llm.application<ObjectLiteralTypeApplication, "3.0">());

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
