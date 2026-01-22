import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_equalsFunction_CommentTagInfinite = (): void =>
  _test_functional_equalsFunction("CommentTagInfinite")(CommentTagInfinite)(
    (p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      typia.functional.equalsFunction(p),
  );
