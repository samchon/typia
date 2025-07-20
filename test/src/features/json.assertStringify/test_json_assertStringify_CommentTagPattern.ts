import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_assertStringify_CommentTagPattern = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)((input) =>
    typia.json.assertStringify<CommentTagPattern>(input),
  );
