import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_assertStringify_CommentTagLength = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)((input) =>
    typia.json.assertStringify<CommentTagLength>(input),
  );
