import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_validate_CommentTagInfinite = (): void =>
  _test_validate("CommentTagInfinite")<CommentTagInfinite>(CommentTagInfinite)(
    (input) => typia.validate<CommentTagInfinite>(input),
  );
