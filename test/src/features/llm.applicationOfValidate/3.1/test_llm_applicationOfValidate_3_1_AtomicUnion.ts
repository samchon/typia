import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_applicationOfValidate_3_1_AtomicUnion =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "AtomicUnion",
    factory: AtomicUnion,
  })(typia.llm.applicationOfValidate<AtomicUnionApplication, "3.1">());

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
