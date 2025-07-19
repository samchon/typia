import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_application_gemini_TypeTagMatrix =
  _test_llm_applicationEquals({
    model: "gemini",
    name: "TypeTagMatrix",
    factory: TypeTagMatrix,
  })(
    typia.llm.application<
      TypeTagMatrixApplication,
      "gemini",
      { equal: true }
    >(),
  );

interface TypeTagMatrixApplication {
  insert(p: { first: TypeTagMatrix }): Promise<void>;
  reduce(p: {
    first: TypeTagMatrix;
    second: TypeTagMatrix | null;
  }): Promise<TypeTagMatrix>;
  coalesce(p: {
    first: TypeTagMatrix | null;
    second: TypeTagMatrix | null;
    third?: TypeTagMatrix | null;
  }): Promise<TypeTagMatrix | null>;
}
