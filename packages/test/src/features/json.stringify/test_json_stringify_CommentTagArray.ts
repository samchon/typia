import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_stringify_CommentTagArray = _test_json_stringify(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
  typia.json.stringify<CommentTagArray>(input),
);
