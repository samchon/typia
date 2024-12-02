import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_parameters_chatgpt_ObjectRequired = _test_llm_parameters({
  model: "chatgpt",
  name: "ObjectRequired",
})(typia.llm.parameters<ObjectRequiredParameters, "chatgpt">());

interface ObjectRequiredParameters {
  regular: ObjectRequired;
  nullable: ObjectRequired | null;
  optional: ObjectRequired | undefined;
  faint: ObjectRequired | null | undefined;
  array: Array<ObjectRequired>;
}
