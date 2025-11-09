import typia from "typia";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_ArrayRepeatedUnion = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ArrayRepeatedUnion",
  })(
    typia.llm.parameters<ArrayRepeatedUnionParameters, "chatgpt">(),
  );

interface ArrayRepeatedUnionParameters {
  regular: ArrayRepeatedUnion;
  nullable: ArrayRepeatedUnion | null;
  optional: ArrayRepeatedUnion | undefined;
  faint: ArrayRepeatedUnion | null | undefined;
  array: Array<ArrayRepeatedUnion>;
}