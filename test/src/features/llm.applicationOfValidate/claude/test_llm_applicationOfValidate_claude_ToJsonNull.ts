import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_llm_applicationOfValidate_claude_ToJsonNull =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ToJsonNull",
    factory: ToJsonNull,
  })(typia.llm.applicationOfValidate<ToJsonNullApplication, "claude">());

interface ToJsonNullApplication {
  insert(p: { first: ToJsonNull }): Promise<void>;
  reduce(p: {
    first: ToJsonNull;
    second: ToJsonNull | null;
  }): Promise<ToJsonNull>;
  coalesce(p: {
    first: ToJsonNull | null;
    second: ToJsonNull | null;
    third?: ToJsonNull | null;
  }): Promise<ToJsonNull | null>;
}
