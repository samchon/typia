import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_llm_application_gemini_ArrayRepeatedUnion = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ArrayRepeatedUnion",
    factory: ArrayRepeatedUnion,
  })(typia.llm.application<ArrayRepeatedUnionApplication, "gemini">());

interface ArrayRepeatedUnionApplication {
  insert(p: { first: ArrayRepeatedUnion }): Promise<void>;
  reduce(p: {
    first: ArrayRepeatedUnion;
    second: ArrayRepeatedUnion | null;
  }): Promise<ArrayRepeatedUnion>;
  coalesce(p: {
    first: ArrayRepeatedUnion | null;
    second: ArrayRepeatedUnion | null;
    third?: ArrayRepeatedUnion | null;
  }): Promise<ArrayRepeatedUnion | null>;
}
