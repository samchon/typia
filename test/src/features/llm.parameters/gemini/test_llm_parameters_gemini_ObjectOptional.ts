import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_parameters_gemini_ObjectOptional = _test_llm_parameters({
  model: "gemini",
  name: "ObjectOptional",
})(typia.llm.parameters<ObjectOptionalParameters, "gemini">());

interface ObjectOptionalParameters {
  regular: ObjectOptional;
  nullable: ObjectOptional | null;
  optional: ObjectOptional | undefined;
  faint: ObjectOptional | null | undefined;
  array: Array<ObjectOptional>;
}
