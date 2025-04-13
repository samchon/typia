import typia from "typia";
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_TypeTagType = 
  _test_llm_parameters({
    model: "gemini",
    name: "TypeTagType",
  })(
    typia.llm.parameters<TypeTagTypeParameters, "gemini">(),
  );

interface TypeTagTypeParameters {
  regular: TypeTagType;
  nullable: TypeTagType | null;
  optional: TypeTagType | undefined;
  faint: TypeTagType | null | undefined;
  array: Array<TypeTagType>;
}