import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_parameters_3_0_ObjectRecursive = _test_llm_parameters({
  model: "3.0",
  name: "ObjectRecursive",
})(typia.llm.parameters<ObjectRecursiveParameters, "3.0">());

interface ObjectRecursiveParameters {
  regular: ObjectRecursive;
  nullable: ObjectRecursive | null;
  optional: ObjectRecursive | undefined;
  faint: ObjectRecursive | null | undefined;
  array: Array<ObjectRecursive>;
}
