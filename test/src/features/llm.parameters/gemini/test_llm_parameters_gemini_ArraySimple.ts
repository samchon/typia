import typia from "typia";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ArraySimple = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ArraySimple",
  })(
    typia.llm.parameters<ArraySimpleParameters, "gemini">(),
  );

interface ArraySimpleParameters {
  regular: ArraySimple;
  nullable: ArraySimple | null;
  optional: ArraySimple | undefined;
  faint: ArraySimple | null | undefined;
  array: Array<ArraySimple>;
}