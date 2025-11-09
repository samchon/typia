import typia from "typia";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_ArrayUnion = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ArrayUnion",
    factory: ArrayUnion
  })(
    typia.llm.application<ArrayUnionApplication, "chatgpt", { equals: true }>(),
  );

interface ArrayUnionApplication {
  insert(p: { first: ArrayUnion }): Promise<void>;
  reduce(p: { first: ArrayUnion, second: ArrayUnion | null }): Promise<ArrayUnion>;
  coalesce(p: {
    first: ArrayUnion | null,
    second: ArrayUnion | null,
    third?: ArrayUnion | null,
  }): Promise<ArrayUnion | null>;
}