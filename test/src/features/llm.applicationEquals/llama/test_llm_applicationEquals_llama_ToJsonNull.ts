import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_llm_application_llama_ToJsonNull =
  _test_llm_applicationEquals({
    model: "llama",
    name: "ToJsonNull",
    factory: ToJsonNull,
  })(typia.llm.application<ToJsonNullApplication, "llama", { equal: true }>());

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
