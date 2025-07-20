import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_llm_applicationEquals_llama_CommentTagArrayUnion = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "CommentTagArrayUnion",
    factory: CommentTagArrayUnion,
  })(
    typia.llm.application<
      CommentTagArrayUnionApplication,
      "llama",
      { equals: true }
    >(),
  );

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
