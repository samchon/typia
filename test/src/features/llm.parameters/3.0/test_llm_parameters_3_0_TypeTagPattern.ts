import typia from "typia";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_TypeTagPattern = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "TypeTagPattern",
  })(
    typia.llm.parameters<TypeTagPatternParameters, "3.0">(),
  );

interface TypeTagPatternParameters {
  regular: TypeTagPattern;
  nullable: TypeTagPattern | null;
  optional: TypeTagPattern | undefined;
  faint: TypeTagPattern | null | undefined;
  array: Array<TypeTagPattern>;
}