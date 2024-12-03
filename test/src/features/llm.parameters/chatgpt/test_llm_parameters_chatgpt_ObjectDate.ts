import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_llm_parameters_chatgpt_ObjectDate = _test_llm_parameters({
  model: "chatgpt",
  name: "ObjectDate",
})(typia.llm.parameters<ObjectDateParameters, "chatgpt">());

interface ObjectDateParameters {
  regular: ObjectDate;
  nullable: ObjectDate | null;
  optional: ObjectDate | undefined;
  faint: ObjectDate | null | undefined;
  array: Array<ObjectDate>;
}
