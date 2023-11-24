import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_createStringify_CommentTagArray = _test_json_stringify(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)(
  typia.json.createStringify<CommentTagArray>(),
);
