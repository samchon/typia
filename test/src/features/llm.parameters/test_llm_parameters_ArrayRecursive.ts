import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_llm_parameters_ArrayRecursive = (): void =>
  _test_llm_parameters("ArrayRecursive")(
    typia.llm.parameters<ArrayRecursiveParameters>(),
  );

interface ArrayRecursiveParameters {
  regular: ArrayRecursive;
  nullable: ArrayRecursive | null;
  optional: ArrayRecursive | undefined;
  faint: ArrayRecursive | null | undefined;
  array: Array<ArrayRecursive>;
}
