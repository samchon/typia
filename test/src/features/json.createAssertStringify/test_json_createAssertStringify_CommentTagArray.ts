import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_CommentTagArray =
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagArray",
  )<CommentTagArray>(CommentTagArray)(
    typia.json.createAssertStringify<CommentTagArray>(),
  );
