import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_parameters_llama_ObjectLiteralType = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ObjectLiteralType",
  })(typia.llm.parameters<ObjectLiteralTypeParameters, "llama">());

interface ObjectLiteralTypeParameters {
  regular: ObjectLiteralType;
  nullable: ObjectLiteralType | null;
  optional: ObjectLiteralType | undefined;
  faint: ObjectLiteralType | null | undefined;
  array: Array<ObjectLiteralType>;
}
