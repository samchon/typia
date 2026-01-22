import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_llm_parameters_TypeTagObjectUnion = (): void =>
  _test_llm_parameters("TypeTagObjectUnion")(
    typia.llm.parameters<TypeTagObjectUnionParameters>(),
  );

interface TypeTagObjectUnionParameters {
  regular: TypeTagObjectUnion;
  nullable: TypeTagObjectUnion | null;
  optional: TypeTagObjectUnion | undefined;
  faint: TypeTagObjectUnion | null | undefined;
  array: Array<TypeTagObjectUnion>;
}
