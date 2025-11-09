import typia from "typia";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ArraySimple = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ArraySimple",
  })(
    typia.llm.parameters<ArraySimpleParameters, "claude">(),
  );

interface ArraySimpleParameters {
  regular: ArraySimple;
  nullable: ArraySimple | null;
  optional: ArraySimple | undefined;
  faint: ArraySimple | null | undefined;
  array: Array<ArraySimple>;
}