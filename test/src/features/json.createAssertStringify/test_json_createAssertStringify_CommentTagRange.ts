import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_createAssertStringify_CommentTagRange =
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagRange",
  )<CommentTagRange>(CommentTagRange)(
    typia.json.createAssertStringify<CommentTagRange>(),
  );
