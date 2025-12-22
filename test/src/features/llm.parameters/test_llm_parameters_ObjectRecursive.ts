import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_llm_parameters_ObjectRecursive = (): void =>
  _test_llm_parameters("ObjectRecursive")(
    typia.llm.parameters<ObjectRecursiveParameters>(),
  );

interface ObjectRecursiveParameters {
  regular: ObjectRecursive;
  nullable: ObjectRecursive | null;
  optional: ObjectRecursive | undefined;
  faint: ObjectRecursive | null | undefined;
  array: Array<ObjectRecursive>;
}
