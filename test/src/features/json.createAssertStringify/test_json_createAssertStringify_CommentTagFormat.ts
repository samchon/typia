import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_createAssertStringify_CommentTagFormat = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)(
    typia.json.createAssertStringify<CommentTagFormat>(),
  );
