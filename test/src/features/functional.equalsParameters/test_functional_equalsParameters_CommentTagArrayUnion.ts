import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_equalsParameters_CommentTagArrayUnion = (): void =>
  _test_functional_equalsParameters("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
    typia.functional.equalsParameters(p),
  );
