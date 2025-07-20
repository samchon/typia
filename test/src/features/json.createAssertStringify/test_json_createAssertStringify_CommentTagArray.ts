import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_createAssertStringify_CommentTagArray = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagArray",
  )<CommentTagArray>(CommentTagArray)(
    typia.json.createAssertStringify<CommentTagArray>(),
  );
