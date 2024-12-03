import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_parameters_3_1_ObjectRequired = _test_llm_parameters({
  model: "3.1",
  name: "ObjectRequired",
})(typia.llm.parameters<ObjectRequiredParameters, "3.1">());

interface ObjectRequiredParameters {
  regular: ObjectRequired;
  nullable: ObjectRequired | null;
  optional: ObjectRequired | undefined;
  faint: ObjectRequired | null | undefined;
  array: Array<ObjectRequired>;
}
