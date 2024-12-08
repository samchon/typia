import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_llm_applicationOfValidate_llama_TypeTagArrayUnion =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "TypeTagArrayUnion",
    factory: TypeTagArrayUnion,
  })(typia.llm.applicationOfValidate<TypeTagArrayUnionApplication, "llama">());

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
