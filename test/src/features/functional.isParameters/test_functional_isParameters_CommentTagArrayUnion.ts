import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_isParameters_CommentTagArrayUnion =
  _test_functional_isParameters("CommentTagArrayUnion")(CommentTagArrayUnion)(
    (p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
      typia.functional.isParameters(p),
  );
