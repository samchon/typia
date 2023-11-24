import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_validateStringify_CommentTagObjectUnion =
  _test_json_validateStringify("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )((input) => typia.json.validateStringify<CommentTagObjectUnion>(input));
