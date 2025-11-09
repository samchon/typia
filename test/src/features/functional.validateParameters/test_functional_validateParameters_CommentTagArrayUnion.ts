import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_validateParameters_CommentTagArrayUnion =
  (): void =>
    _test_functional_validateParameters("CommentTagArrayUnion")(
      CommentTagArrayUnion,
    )((p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) =>
      typia.functional.validateParameters(p),
    );
