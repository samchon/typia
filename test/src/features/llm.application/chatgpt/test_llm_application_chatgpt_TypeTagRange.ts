import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_application_chatgpt_TypeTagRange = _test_llm_application({
  model: "chatgpt",
  name: "TypeTagRange",
})(typia.llm.application<TypeTagRangeApplication, "chatgpt">());

interface TypeTagRangeApplication {
  insert(p: { first: TypeTagRange }): Promise<void>;
  reduce(p: {
    first: TypeTagRange;
    second: TypeTagRange | null;
  }): Promise<TypeTagRange>;
  coalesce(p: {
    first: TypeTagRange | null;
    second: TypeTagRange | null;
    third?: TypeTagRange | null;
  }): Promise<TypeTagRange | null>;
}
