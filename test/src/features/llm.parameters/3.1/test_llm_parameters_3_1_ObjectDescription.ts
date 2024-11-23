import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_parameters_3_1_ObjectDescription = _test_llm_parameters({
  model: "3.1",
  name: "ObjectDescription",
})(typia.llm.parameters<ObjectDescriptionParameters, "3.1">());

interface ObjectDescriptionParameters {
  regular: ObjectDescription;
  nullable: ObjectDescription | null;
  optional: ObjectDescription | undefined;
  faint: ObjectDescription | null | undefined;
  array: Array<ObjectDescription>;
}
