import typia from "typia";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_ArrayRecursive = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ArrayRecursive",
  })(
    typia.llm.parameters<ArrayRecursiveParameters, "3.1">(),
  );

interface ArrayRecursiveParameters {
  regular: ArrayRecursive;
  nullable: ArrayRecursive | null;
  optional: ArrayRecursive | undefined;
  faint: ArrayRecursive | null | undefined;
  array: Array<ArrayRecursive>;
}