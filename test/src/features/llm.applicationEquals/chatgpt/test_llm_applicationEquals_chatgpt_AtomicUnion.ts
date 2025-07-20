import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_applicationEquals_chatgpt_AtomicUnion = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "AtomicUnion",
    factory: AtomicUnion,
  })(
    typia.llm.application<
      AtomicUnionApplication,
      "chatgpt",
      { equals: true }
    >(),
  );

interface AtomicUnionApplication {
  insert(p: { first: AtomicUnion }): Promise<void>;
  reduce(p: {
    first: AtomicUnion;
    second: AtomicUnion | null;
  }): Promise<AtomicUnion>;
  coalesce(p: {
    first: AtomicUnion | null;
    second: AtomicUnion | null;
    third?: AtomicUnion | null;
  }): Promise<AtomicUnion | null>;
}
