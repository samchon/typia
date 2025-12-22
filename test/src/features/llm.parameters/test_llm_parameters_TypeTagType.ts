import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_llm_parameters_TypeTagType = (): void =>
  _test_llm_parameters("TypeTagType")(
    typia.llm.parameters<TypeTagTypeParameters>(),
  );

interface TypeTagTypeParameters {
  regular: TypeTagType;
  nullable: TypeTagType | null;
  optional: TypeTagType | undefined;
  faint: TypeTagType | null | undefined;
  array: Array<TypeTagType>;
}
