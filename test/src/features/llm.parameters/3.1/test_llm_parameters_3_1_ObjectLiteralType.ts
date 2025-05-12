import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_parameters_3_1_ObjectLiteralType = _test_llm_parameters({
  model: "3.1",
  name: "ObjectLiteralType",
})(typia.llm.parameters<ObjectLiteralTypeParameters, "3.1">());

interface ObjectLiteralTypeParameters {
  regular: ObjectLiteralType;
  nullable: ObjectLiteralType | null;
  optional: ObjectLiteralType | undefined;
  faint: ObjectLiteralType | null | undefined;
  array: Array<ObjectLiteralType>;
}
