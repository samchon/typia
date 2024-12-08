import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_applicationOfValidate_chatgpt_AtomicUnion =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "AtomicUnion",
    factory: AtomicUnion,
  })(typia.llm.applicationOfValidate<AtomicUnionApplication, "chatgpt">());

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
