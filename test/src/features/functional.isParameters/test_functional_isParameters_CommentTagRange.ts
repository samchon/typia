import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_isParameters_CommentTagRange = (): void =>
  _test_functional_isParameters("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => CommentTagRange) =>
      typia.functional.isParameters(p),
  );
