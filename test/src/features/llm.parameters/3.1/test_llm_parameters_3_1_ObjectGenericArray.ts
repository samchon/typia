import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_parameters_3_1_ObjectGenericArray = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ObjectGenericArray",
  })(typia.llm.parameters<ObjectGenericArrayParameters, "3.1">());

interface ObjectGenericArrayParameters {
  regular: ObjectGenericArray;
  nullable: ObjectGenericArray | null;
  optional: ObjectGenericArray | undefined;
  faint: ObjectGenericArray | null | undefined;
  array: Array<ObjectGenericArray>;
}
