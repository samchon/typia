import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_AtomicUnion = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "AtomicUnion",
    factory: AtomicUnion
  })(
    typia.llm.application<AtomicUnionApplication, "claude", { equals: true }>(),
  );

interface AtomicUnionApplication {
  insert(p: { first: AtomicUnion }): Promise<void>;
  reduce(p: { first: AtomicUnion, second: AtomicUnion | null }): Promise<AtomicUnion>;
  coalesce(p: {
    first: AtomicUnion | null,
    second: AtomicUnion | null,
    third?: AtomicUnion | null,
  }): Promise<AtomicUnion | null>;
}