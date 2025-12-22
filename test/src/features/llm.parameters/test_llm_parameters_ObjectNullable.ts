import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_llm_parameters_ObjectNullable = (): void =>
  _test_llm_parameters("ObjectNullable")(
    typia.llm.parameters<ObjectNullableParameters>(),
  );

interface ObjectNullableParameters {
  regular: ObjectNullable;
  nullable: ObjectNullable | null;
  optional: ObjectNullable | undefined;
  faint: ObjectNullable | null | undefined;
  array: Array<ObjectNullable>;
}
