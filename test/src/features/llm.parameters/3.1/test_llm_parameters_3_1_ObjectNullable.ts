import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_llm_parameters_3_1_ObjectNullable = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ObjectNullable",
  })(typia.llm.parameters<ObjectNullableParameters, "3.1">());

interface ObjectNullableParameters {
  regular: ObjectNullable;
  nullable: ObjectNullable | null;
  optional: ObjectNullable | undefined;
  faint: ObjectNullable | null | undefined;
  array: Array<ObjectNullable>;
}
