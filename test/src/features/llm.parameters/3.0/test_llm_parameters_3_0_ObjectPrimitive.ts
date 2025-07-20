import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_llm_parameters_3_0_ObjectPrimitive = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectPrimitive",
  })(typia.llm.parameters<ObjectPrimitiveParameters, "3.0">());

interface ObjectPrimitiveParameters {
  regular: ObjectPrimitive;
  nullable: ObjectPrimitive | null;
  optional: ObjectPrimitive | undefined;
  faint: ObjectPrimitive | null | undefined;
  array: Array<ObjectPrimitive>;
}
