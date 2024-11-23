import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_parameters_3_1_ObjectUndefined = _test_llm_parameters({
  model: "3.1",
  name: "ObjectUndefined",
})(typia.llm.parameters<ObjectUndefinedParameters, "3.1">());

interface ObjectUndefinedParameters {
  regular: ObjectUndefined;
  nullable: ObjectUndefined | null;
  optional: ObjectUndefined | undefined;
  faint: ObjectUndefined | null | undefined;
  array: Array<ObjectUndefined>;
}
