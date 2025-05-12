import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_llm_parameters_llama_ObjectNullable = _test_llm_parameters({
  model: "llama",
  name: "ObjectNullable",
})(typia.llm.parameters<ObjectNullableParameters, "llama">());

interface ObjectNullableParameters {
  regular: ObjectNullable;
  nullable: ObjectNullable | null;
  optional: ObjectNullable | undefined;
  faint: ObjectNullable | null | undefined;
  array: Array<ObjectNullable>;
}
