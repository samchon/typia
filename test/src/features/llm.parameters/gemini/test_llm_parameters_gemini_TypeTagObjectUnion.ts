import typia from "typia";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_TypeTagObjectUnion = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "TypeTagObjectUnion",
  })(
    typia.llm.parameters<TypeTagObjectUnionParameters, "gemini">(),
  );

interface TypeTagObjectUnionParameters {
  regular: TypeTagObjectUnion;
  nullable: TypeTagObjectUnion | null;
  optional: TypeTagObjectUnion | undefined;
  faint: TypeTagObjectUnion | null | undefined;
  array: Array<TypeTagObjectUnion>;
}