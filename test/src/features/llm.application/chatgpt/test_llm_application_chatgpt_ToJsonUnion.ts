import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_application_chatgpt_ToJsonUnion = _test_llm_application({
  model: "chatgpt",
  name: "ToJsonUnion",
})(typia.llm.application<ToJsonUnionApplication, "chatgpt">());

interface ToJsonUnionApplication {
  insert(p: { first: ToJsonUnion }): Promise<void>;
  reduce(p: {
    first: ToJsonUnion;
    second: ToJsonUnion | null;
  }): Promise<ToJsonUnion>;
  coalesce(p: {
    first: ToJsonUnion | null;
    second: ToJsonUnion | null;
    third?: ToJsonUnion | null;
  }): Promise<ToJsonUnion | null>;
}
