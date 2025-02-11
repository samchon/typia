import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_equalsFunction_CommentTagArrayUnion =
  _test_functional_equalsFunction("CommentTagArrayUnion")(CommentTagArrayUnion)(
    (p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
      typia.functional.equalsFunction(p),
  );
