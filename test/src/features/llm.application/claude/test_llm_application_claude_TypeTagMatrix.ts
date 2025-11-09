import typia from "typia";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_TypeTagMatrix = (): void =>
  _test_llm_application({
    model: "claude",
    name: "TypeTagMatrix",
    factory: TypeTagMatrix
  })(
    typia.llm.application<TypeTagMatrixApplication, "claude">(),
  );

interface TypeTagMatrixApplication {
  insert(p: { first: TypeTagMatrix }): Promise<void>;
  reduce(p: { first: TypeTagMatrix, second: TypeTagMatrix | null }): Promise<TypeTagMatrix>;
  coalesce(p: {
    first: TypeTagMatrix | null,
    second: TypeTagMatrix | null,
    third?: TypeTagMatrix | null,
  }): Promise<TypeTagMatrix | null>;
}