import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_applicationOfValidate_chatgpt_CommentTagAtomicUnion =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "CommentTagAtomicUnion",
    factory: CommentTagAtomicUnion,
  })(
    typia.llm.applicationOfValidate<
      CommentTagAtomicUnionApplication,
      "chatgpt"
    >(),
  );

interface CommentTagAtomicUnionApplication {
  insert(p: { first: CommentTagAtomicUnion }): Promise<void>;
  reduce(p: {
    first: CommentTagAtomicUnion;
    second: CommentTagAtomicUnion | null;
  }): Promise<CommentTagAtomicUnion>;
  coalesce(p: {
    first: CommentTagAtomicUnion | null;
    second: CommentTagAtomicUnion | null;
    third?: CommentTagAtomicUnion | null;
  }): Promise<CommentTagAtomicUnion | null>;
}
