import typia from "typia";
import { TypeTagRange } from "../../../structures/TypeTagRange";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_TypeTagRange = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "TypeTagRange",
  })(
    typia.llm.parameters<TypeTagRangeParameters, "gemini">(),
  );

interface TypeTagRangeParameters {
  regular: TypeTagRange;
  nullable: TypeTagRange | null;
  optional: TypeTagRange | undefined;
  faint: TypeTagRange | null | undefined;
  array: Array<TypeTagRange>;
}