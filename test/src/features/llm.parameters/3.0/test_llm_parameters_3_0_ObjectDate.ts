import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_llm_parameters_3_0_ObjectDate = _test_llm_parameters({
  model: "3.0",
  name: "ObjectDate",
})(typia.llm.parameters<ObjectDateParameters, "3.0">());

interface ObjectDateParameters {
  regular: ObjectDate;
  nullable: ObjectDate | null;
  optional: ObjectDate | undefined;
  faint: ObjectDate | null | undefined;
  array: Array<ObjectDate>;
}
