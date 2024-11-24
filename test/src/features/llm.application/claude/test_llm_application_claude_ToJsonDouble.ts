import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_application_claude_ToJsonDouble = _test_llm_application({
  model: "claude",
  name: "ToJsonDouble",
})(typia.llm.application<ToJsonDoubleApplication, "claude">());

interface ToJsonDoubleApplication {
  insert(first: ToJsonDouble): Promise<void>;
  reduce(
    first: ToJsonDouble,
    second: ToJsonDouble | null,
  ): Promise<ToJsonDouble>;
  coalesce(
    first: ToJsonDouble | null,
    second: ToJsonDouble | null,
    third?: ToJsonDouble | null,
  ): Promise<ToJsonDouble | null>;
}
