import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateReturn_CommentTagFormat =
  _test_functional_validateReturn("CommentTagFormat")(CommentTagFormat)(
    (p: (input: CommentTagFormat) => CommentTagFormat) =>
      typia.functional.validateReturn(p),
  );
