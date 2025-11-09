import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateParameters_CommentTagRange = (): void =>
  _test_functional_validateParameters("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => CommentTagRange) =>
      typia.functional.validateParameters(p),
  );
