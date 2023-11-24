import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_validateStringify_CommentTagArray =
  _test_json_validateStringify("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )((input) => typia.json.validateStringify<CommentTagArray>(input));
