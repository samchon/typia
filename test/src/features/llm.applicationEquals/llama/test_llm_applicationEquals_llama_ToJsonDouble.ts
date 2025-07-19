import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_application_llama_ToJsonDouble =
  _test_llm_applicationEquals({
    model: "llama",
    name: "ToJsonDouble",
    factory: ToJsonDouble,
  })(
    typia.llm.application<ToJsonDoubleApplication, "llama", { equal: true }>(),
  );

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
