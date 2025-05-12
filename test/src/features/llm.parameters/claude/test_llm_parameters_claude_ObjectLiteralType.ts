import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_parameters_claude_ObjectLiteralType =
  _test_llm_parameters({
    model: "claude",
    name: "ObjectLiteralType",
  })(typia.llm.parameters<ObjectLiteralTypeParameters, "claude">());

interface ObjectLiteralTypeParameters {
  regular: ObjectLiteralType;
  nullable: ObjectLiteralType | null;
  optional: ObjectLiteralType | undefined;
  faint: ObjectLiteralType | null | undefined;
  array: Array<ObjectLiteralType>;
}
