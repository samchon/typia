import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateReturn_CommentTagLength =
  _test_functional_validateReturn("CommentTagLength")(CommentTagLength)(
    (p: (input: CommentTagLength) => CommentTagLength) =>
      typia.functional.validateReturn(p),
  );
