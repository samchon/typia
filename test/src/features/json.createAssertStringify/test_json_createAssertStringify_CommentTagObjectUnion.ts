import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_CommentTagObjectUnion =
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)(
    typia.json.createAssertStringify<CommentTagObjectUnion>(),
  );
