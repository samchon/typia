import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_llm_parameters_TypeTagMatrix = (): void =>
  _test_llm_parameters("TypeTagMatrix")(
    typia.llm.parameters<TypeTagMatrixParameters>(),
  );

interface TypeTagMatrixParameters {
  regular: TypeTagMatrix;
  nullable: TypeTagMatrix | null;
  optional: TypeTagMatrix | undefined;
  faint: TypeTagMatrix | null | undefined;
  array: Array<TypeTagMatrix>;
}
