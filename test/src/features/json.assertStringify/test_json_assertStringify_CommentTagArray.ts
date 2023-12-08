import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_assertStringify_CommentTagArray =
  _test_json_assertStringify("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )((input) => typia.json.assertStringify<CommentTagArray>(input));
