import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_applicationOfValidate_chatgpt_ArrayUnion =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ArrayUnion",
    factory: ArrayUnion,
  })(typia.llm.applicationOfValidate<ArrayUnionApplication, "chatgpt">());

interface ArrayUnionApplication {
  insert(p: { first: ArrayUnion }): Promise<void>;
  reduce(p: {
    first: ArrayUnion;
    second: ArrayUnion | null;
  }): Promise<ArrayUnion>;
  coalesce(p: {
    first: ArrayUnion | null;
    second: ArrayUnion | null;
    third?: ArrayUnion | null;
  }): Promise<ArrayUnion | null>;
}
