import typia from "typia";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_ToJsonDouble = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ToJsonDouble",
    factory: ToJsonDouble
  })(
    typia.llm.application<ToJsonDoubleApplication, "claude">(),
  );

interface ToJsonDoubleApplication {
  insert(p: { first: ToJsonDouble }): Promise<void>;
  reduce(p: { first: ToJsonDouble, second: ToJsonDouble | null }): Promise<ToJsonDouble>;
  coalesce(p: {
    first: ToJsonDouble | null,
    second: ToJsonDouble | null,
    third?: ToJsonDouble | null,
  }): Promise<ToJsonDouble | null>;
}