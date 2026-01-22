import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_createAssertStringify_CommentTagObjectUnion = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)(
    typia.json.createAssertStringify<CommentTagObjectUnion>(),
  );
