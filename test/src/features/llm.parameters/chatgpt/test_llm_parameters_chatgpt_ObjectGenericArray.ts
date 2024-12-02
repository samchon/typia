import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_parameters_chatgpt_ObjectGenericArray =
  _test_llm_parameters({
    model: "chatgpt",
    name: "ObjectGenericArray",
  })(typia.llm.parameters<ObjectGenericArrayParameters, "chatgpt">());

interface ObjectGenericArrayParameters {
  regular: ObjectGenericArray;
  nullable: ObjectGenericArray | null;
  optional: ObjectGenericArray | undefined;
  faint: ObjectGenericArray | null | undefined;
  array: Array<ObjectGenericArray>;
}
