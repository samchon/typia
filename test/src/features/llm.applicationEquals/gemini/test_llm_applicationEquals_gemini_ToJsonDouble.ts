import typia from "typia";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_ToJsonDouble = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ToJsonDouble",
    factory: ToJsonDouble
  })(
    typia.llm.application<ToJsonDoubleApplication, "gemini", { equals: true }>(),
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