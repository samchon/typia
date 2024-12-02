import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_llm_parameters_llama_ObjectPrimitive = _test_llm_parameters({
  model: "llama",
  name: "ObjectPrimitive",
})(typia.llm.parameters<ObjectPrimitiveParameters, "llama">());

interface ObjectPrimitiveParameters {
  regular: ObjectPrimitive;
  nullable: ObjectPrimitive | null;
  optional: ObjectPrimitive | undefined;
  faint: ObjectPrimitive | null | undefined;
  array: Array<ObjectPrimitive>;
}
