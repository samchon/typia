import typia from "typia";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_TypeTagMatrix = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "TypeTagMatrix",
    factory: TypeTagMatrix
  })(
    typia.llm.application<TypeTagMatrixApplication, "chatgpt", { equals: true }>(),
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