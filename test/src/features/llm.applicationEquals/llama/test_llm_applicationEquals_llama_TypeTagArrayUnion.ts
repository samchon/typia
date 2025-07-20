import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_llm_applicationEquals_llama_TypeTagArrayUnion = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "TypeTagArrayUnion",
    factory: TypeTagArrayUnion,
  })(
    typia.llm.application<
      TypeTagArrayUnionApplication,
      "llama",
      { equal: true }
    >(),
  );

interface TypeTagArrayUnionApplication {
  insert(p: { first: TypeTagArrayUnion }): Promise<void>;
  reduce(p: {
    first: TypeTagArrayUnion;
    second: TypeTagArrayUnion | null;
  }): Promise<TypeTagArrayUnion>;
  coalesce(p: {
    first: TypeTagArrayUnion | null;
    second: TypeTagArrayUnion | null;
    third?: TypeTagArrayUnion | null;
  }): Promise<TypeTagArrayUnion | null>;
}
