import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_llm_parameters_gemini_ObjectPartial = _test_llm_parameters({
  model: "gemini",
  name: "ObjectPartial",
})(typia.llm.parameters<ObjectPartialParameters, "gemini">());

interface ObjectPartialParameters {
  regular: ObjectPartial;
  nullable: ObjectPartial | null;
  optional: ObjectPartial | undefined;
  faint: ObjectPartial | null | undefined;
  array: Array<ObjectPartial>;
}
