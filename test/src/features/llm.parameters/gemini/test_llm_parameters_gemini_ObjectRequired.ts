import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_parameters_gemini_ObjectRequired = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectRequired",
  })(typia.llm.parameters<ObjectRequiredParameters, "gemini">());

interface ObjectRequiredParameters {
  regular: ObjectRequired;
  nullable: ObjectRequired | null;
  optional: ObjectRequired | undefined;
  faint: ObjectRequired | null | undefined;
  array: Array<ObjectRequired>;
}
