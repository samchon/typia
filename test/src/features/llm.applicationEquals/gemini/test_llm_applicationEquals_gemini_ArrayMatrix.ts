import typia from "typia";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_ArrayMatrix = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ArrayMatrix",
    factory: ArrayMatrix
  })(
    typia.llm.application<ArrayMatrixApplication, "gemini", { equals: true }>(),
  );

interface ArrayMatrixApplication {
  insert(p: { first: ArrayMatrix }): Promise<void>;
  reduce(p: { first: ArrayMatrix, second: ArrayMatrix | null }): Promise<ArrayMatrix>;
  coalesce(p: {
    first: ArrayMatrix | null,
    second: ArrayMatrix | null,
    third?: ArrayMatrix | null,
  }): Promise<ArrayMatrix | null>;
}