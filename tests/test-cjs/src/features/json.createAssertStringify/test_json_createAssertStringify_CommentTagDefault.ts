import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_createAssertStringify_CommentTagDefault = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)(
    typia.json.createAssertStringify<CommentTagDefault>(),
  );
