import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_AtomicUnion = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "AtomicUnion",
    factory: AtomicUnion
  })(
    typia.llm.application<AtomicUnionApplication, "chatgpt">(),
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