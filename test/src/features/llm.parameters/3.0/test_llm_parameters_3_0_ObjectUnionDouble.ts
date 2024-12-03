import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_llm_parameters_3_0_ObjectUnionDouble = _test_llm_parameters({
  model: "3.0",
  name: "ObjectUnionDouble",
})(typia.llm.parameters<ObjectUnionDoubleParameters, "3.0">());

interface ObjectUnionDoubleParameters {
  regular: ObjectUnionDouble;
  nullable: ObjectUnionDouble | null;
  optional: ObjectUnionDouble | undefined;
  faint: ObjectUnionDouble | null | undefined;
  array: Array<ObjectUnionDouble>;
}
