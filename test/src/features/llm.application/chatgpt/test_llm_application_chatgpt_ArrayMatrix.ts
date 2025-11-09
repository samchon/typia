import typia from "typia";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ArrayMatrix = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ArrayMatrix",
    factory: ArrayMatrix
  })(
    typia.llm.application<ArrayMatrixApplication, "chatgpt">(),
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