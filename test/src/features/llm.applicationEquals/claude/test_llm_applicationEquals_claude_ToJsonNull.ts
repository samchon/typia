import typia from "typia";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ToJsonNull = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ToJsonNull",
    factory: ToJsonNull
  })(
    typia.llm.application<ToJsonNullApplication, "claude", { equals: true }>(),
  );

interface ToJsonNullApplication {
  insert(p: { first: ToJsonNull }): Promise<void>;
  reduce(p: { first: ToJsonNull, second: ToJsonNull | null }): Promise<ToJsonNull>;
  coalesce(p: {
    first: ToJsonNull | null,
    second: ToJsonNull | null,
    third?: ToJsonNull | null,
  }): Promise<ToJsonNull | null>;
}