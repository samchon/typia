import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_isStringify_CommentTagObjectUnion =
  _test_json_isStringify("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )((input) => typia.json.isStringify<CommentTagObjectUnion>(input));
