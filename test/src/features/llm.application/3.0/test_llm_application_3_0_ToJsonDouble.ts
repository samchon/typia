import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_application_3_0_ToJsonDouble = _test_llm_application({
  model: "3.0",
  name: "ToJsonDouble",
})(typia.llm.application<ToJsonDoubleApplication, "3.0">());

interface ToJsonDoubleApplication {
  insert(p: { first: ToJsonDouble }): Promise<void>;
  reduce(p: {
    first: ToJsonDouble;
    second: ToJsonDouble | null;
  }): Promise<ToJsonDouble>;
  coalesce(p: {
    first: ToJsonDouble | null;
    second: ToJsonDouble | null;
    third?: ToJsonDouble | null;
  }): Promise<ToJsonDouble | null>;
}
