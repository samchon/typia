import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_json_assertParse_CommentTagObjectUnion =
  _test_json_assertParse(TypeGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    typia.json.assertParse<CommentTagObjectUnion>(input),
  );
