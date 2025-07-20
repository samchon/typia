import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_validateParse_CommentTagObjectUnion = (): void =>
  _test_json_validateParse("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )((input) => typia.json.validateParse<CommentTagObjectUnion>(input));
