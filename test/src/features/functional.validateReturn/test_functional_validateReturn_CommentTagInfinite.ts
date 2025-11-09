import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateReturn_CommentTagInfinite = (): void =>
  _test_functional_validateReturn("CommentTagInfinite")(CommentTagInfinite)(
    (p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      typia.functional.validateReturn(p),
  );
