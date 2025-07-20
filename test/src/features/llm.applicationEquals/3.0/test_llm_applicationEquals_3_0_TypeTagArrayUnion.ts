import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_llm_applicationEquals_3_0_TypeTagArrayUnion = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "TypeTagArrayUnion",
    factory: TypeTagArrayUnion,
  })(
    typia.llm.application<
      TypeTagArrayUnionApplication,
      "3.0",
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
