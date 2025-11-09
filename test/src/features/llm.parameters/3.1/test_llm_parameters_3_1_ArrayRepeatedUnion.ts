import typia from "typia";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_ArrayRepeatedUnion = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ArrayRepeatedUnion",
  })(
    typia.llm.parameters<ArrayRepeatedUnionParameters, "3.1">(),
  );

interface ArrayRepeatedUnionParameters {
  regular: ArrayRepeatedUnion;
  nullable: ArrayRepeatedUnion | null;
  optional: ArrayRepeatedUnion | undefined;
  faint: ArrayRepeatedUnion | null | undefined;
  array: Array<ArrayRepeatedUnion>;
}