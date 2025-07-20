import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_validate_CommentTagNaN = (): void =>
  _test_validate("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)((input) =>
    typia.validate<CommentTagNaN>(input),
  );
