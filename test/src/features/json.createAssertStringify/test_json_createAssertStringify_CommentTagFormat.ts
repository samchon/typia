import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_CommentTagFormat =
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)(
    typia.json.createAssertStringify<CommentTagFormat>(),
  );
