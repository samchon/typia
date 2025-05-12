import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_llm_parameters_claude_ObjectPrimitive = _test_llm_parameters({
  model: "claude",
  name: "ObjectPrimitive",
})(typia.llm.parameters<ObjectPrimitiveParameters, "claude">());

interface ObjectPrimitiveParameters {
  regular: ObjectPrimitive;
  nullable: ObjectPrimitive | null;
  optional: ObjectPrimitive | undefined;
  faint: ObjectPrimitive | null | undefined;
  array: Array<ObjectPrimitive>;
}
