import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_llm_parameters_TypeTagFormat = (): void =>
  _test_llm_parameters("TypeTagFormat")(
    typia.llm.parameters<TypeTagFormatParameters>(),
  );

interface TypeTagFormatParameters {
  regular: TypeTagFormat;
  nullable: TypeTagFormat | null;
  optional: TypeTagFormat | undefined;
  faint: TypeTagFormat | null | undefined;
  array: Array<TypeTagFormat>;
}
