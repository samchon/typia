import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_stringify_CommentTagObjectUnion = (): void =>
  _test_json_stringify("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )((input) => typia.json.stringify<CommentTagObjectUnion>(input));
