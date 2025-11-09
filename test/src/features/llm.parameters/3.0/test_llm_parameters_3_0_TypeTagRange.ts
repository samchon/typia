import typia from "typia";
import { TypeTagRange } from "../../../structures/TypeTagRange";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_TypeTagRange = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "TypeTagRange",
  })(
    typia.llm.parameters<TypeTagRangeParameters, "3.0">(),
  );

interface TypeTagRangeParameters {
  regular: TypeTagRange;
  nullable: TypeTagRange | null;
  optional: TypeTagRange | undefined;
  faint: TypeTagRange | null | undefined;
  array: Array<TypeTagRange>;
}