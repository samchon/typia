import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_parameters_llama_ObjectGenericArray =
  _test_llm_parameters({
    model: "llama",
    name: "ObjectGenericArray",
  })(typia.llm.parameters<ObjectGenericArrayParameters, "llama">());

interface ObjectGenericArrayParameters {
  regular: ObjectGenericArray;
  nullable: ObjectGenericArray | null;
  optional: ObjectGenericArray | undefined;
  faint: ObjectGenericArray | null | undefined;
  array: Array<ObjectGenericArray>;
}
