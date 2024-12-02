import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_parameters_3_0_ObjectUndefined = _test_llm_parameters({
  model: "3.0",
  name: "ObjectUndefined",
})(typia.llm.parameters<ObjectUndefinedParameters, "3.0">());

interface ObjectUndefinedParameters {
  regular: ObjectUndefined;
  nullable: ObjectUndefined | null;
  optional: ObjectUndefined | undefined;
  faint: ObjectUndefined | null | undefined;
  array: Array<ObjectUndefined>;
}
