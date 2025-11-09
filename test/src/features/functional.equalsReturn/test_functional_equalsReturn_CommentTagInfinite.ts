import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_equalsReturn_CommentTagInfinite = (): void =>
  _test_functional_equalsReturn("CommentTagInfinite")(CommentTagInfinite)(
    (p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      typia.functional.equalsReturn(p),
  );
