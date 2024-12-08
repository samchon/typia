import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_llm_applicationOfValidate_3_0_CommentTagArrayUnion =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "CommentTagArrayUnion",
    factory: CommentTagArrayUnion,
  })(typia.llm.applicationOfValidate<CommentTagArrayUnionApplication, "3.0">());

interface CommentTagArrayUnionApplication {
  insert(p: { first: CommentTagArrayUnion }): Promise<void>;
  reduce(p: {
    first: CommentTagArrayUnion;
    second: CommentTagArrayUnion | null;
  }): Promise<CommentTagArrayUnion>;
  coalesce(p: {
    first: CommentTagArrayUnion | null;
    second: CommentTagArrayUnion | null;
    third?: CommentTagArrayUnion | null;
  }): Promise<CommentTagArrayUnion | null>;
}
