import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_llm_parameters_chatgpt_ObjectInternal = _test_llm_parameters({
  model: "chatgpt",
  name: "ObjectInternal",
})(typia.llm.parameters<ObjectInternalParameters, "chatgpt">());

interface ObjectInternalParameters {
  regular: ObjectInternal;
  nullable: ObjectInternal | null;
  optional: ObjectInternal | undefined;
  faint: ObjectInternal | null | undefined;
  array: Array<ObjectInternal>;
}
