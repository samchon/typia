import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_parameters_3_1_ObjectOptional = _test_llm_parameters({
  model: "3.1",
  name: "ObjectOptional",
})(typia.llm.parameters<ObjectOptionalParameters, "3.1">());

interface ObjectOptionalParameters {
  regular: ObjectOptional;
  nullable: ObjectOptional | null;
  optional: ObjectOptional | undefined;
  faint: ObjectOptional | null | undefined;
  array: Array<ObjectOptional>;
}
