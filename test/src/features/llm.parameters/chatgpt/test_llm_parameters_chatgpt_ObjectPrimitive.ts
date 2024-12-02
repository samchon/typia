import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_llm_parameters_chatgpt_ObjectPrimitive = _test_llm_parameters(
  {
    model: "chatgpt",
    name: "ObjectPrimitive",
  },
)(typia.llm.parameters<ObjectPrimitiveParameters, "chatgpt">());

interface ObjectPrimitiveParameters {
  regular: ObjectPrimitive;
  nullable: ObjectPrimitive | null;
  optional: ObjectPrimitive | undefined;
  faint: ObjectPrimitive | null | undefined;
  array: Array<ObjectPrimitive>;
}
