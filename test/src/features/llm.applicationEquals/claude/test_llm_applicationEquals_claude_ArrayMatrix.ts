import typia from "typia";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ArrayMatrix = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ArrayMatrix",
    factory: ArrayMatrix
  })(
    typia.llm.application<ArrayMatrixApplication, "claude", { equals: true }>(),
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