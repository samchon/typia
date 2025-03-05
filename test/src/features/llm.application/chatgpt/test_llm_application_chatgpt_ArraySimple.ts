import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_llm_application_chatgpt_ArraySimple = _test_llm_application({
  model: "chatgpt",
  name: "ArraySimple",
  factory: ArraySimple,
})(typia.llm.application<ArraySimpleApplication, "chatgpt">());

interface ArraySimpleApplication {
  insert(p: { first: ArraySimple }): Promise<void>;
  reduce(p: {
    first: ArraySimple;
    second: ArraySimple | null;
  }): Promise<ArraySimple>;
  coalesce(p: {
    first: ArraySimple | null;
    second: ArraySimple | null;
    third?: ArraySimple | null;
  }): Promise<ArraySimple | null>;
}
