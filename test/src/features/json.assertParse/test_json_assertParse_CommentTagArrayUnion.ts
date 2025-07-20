import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_assertParse_CommentTagArrayUnion = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.json.assertParse<CommentTagArrayUnion>(input),
  );
