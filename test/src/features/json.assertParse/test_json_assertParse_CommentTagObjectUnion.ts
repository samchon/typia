import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_assertParse_CommentTagObjectUnion = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    typia.json.assertParse<CommentTagObjectUnion>(input),
  );
