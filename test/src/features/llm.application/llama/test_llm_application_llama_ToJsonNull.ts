import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_llm_application_llama_ToJsonNull = _test_llm_application({
  model: "llama",
  name: "ToJsonNull",
})(typia.llm.application<ToJsonNullApplication, "llama">());

interface ToJsonNullApplication {
  insert(first: ToJsonNull): Promise<void>;
  reduce(first: ToJsonNull, second: ToJsonNull | null): Promise<ToJsonNull>;
  coalesce(
    first: ToJsonNull | null,
    second: ToJsonNull | null,
    third?: ToJsonNull | null,
  ): Promise<ToJsonNull | null>;
}
