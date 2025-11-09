import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_llm_application_claude_ToJsonNull = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ToJsonNull",
    factory: ToJsonNull,
  })(typia.llm.application<ToJsonNullApplication, "claude">());

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
