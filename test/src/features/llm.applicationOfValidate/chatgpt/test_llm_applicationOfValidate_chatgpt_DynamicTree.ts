import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_applicationOfValidate_chatgpt_DynamicTree =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "DynamicTree",
    factory: DynamicTree,
  })(typia.llm.applicationOfValidate<DynamicTreeApplication, "chatgpt">());

interface DynamicTreeApplication {
  insert(p: { first: DynamicTree }): Promise<void>;
  reduce(p: {
    first: DynamicTree;
    second: DynamicTree | null;
  }): Promise<DynamicTree>;
  coalesce(p: {
    first: DynamicTree | null;
    second: DynamicTree | null;
    third?: DynamicTree | null;
  }): Promise<DynamicTree | null>;
}
