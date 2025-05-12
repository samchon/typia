import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_parameters_3_0_ObjectDescription = _test_llm_parameters({
  model: "3.0",
  name: "ObjectDescription",
})(typia.llm.parameters<ObjectDescriptionParameters, "3.0">());

interface ObjectDescriptionParameters {
  regular: ObjectDescription;
  nullable: ObjectDescription | null;
  optional: ObjectDescription | undefined;
  faint: ObjectDescription | null | undefined;
  array: Array<ObjectDescription>;
}
