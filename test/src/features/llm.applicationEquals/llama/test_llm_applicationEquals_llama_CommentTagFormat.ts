import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_llm_application_llama_CommentTagFormat =
  _test_llm_applicationEquals({
    model: "llama",
    name: "CommentTagFormat",
    factory: CommentTagFormat,
  })(
    typia.llm.application<
      CommentTagFormatApplication,
      "llama",
      { equal: true }
    >(),
  );

interface CommentTagFormatApplication {
  insert(p: { first: CommentTagFormat }): Promise<void>;
  reduce(p: {
    first: CommentTagFormat;
    second: CommentTagFormat | null;
  }): Promise<CommentTagFormat>;
  coalesce(p: {
    first: CommentTagFormat | null;
    second: CommentTagFormat | null;
    third?: CommentTagFormat | null;
  }): Promise<CommentTagFormat | null>;
}
