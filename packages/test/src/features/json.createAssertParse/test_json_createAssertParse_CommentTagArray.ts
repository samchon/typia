import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_createAssertParse_CommentTagArray =
  _test_json_assertParse("CommentTagArray")<CommentTagArray>(CommentTagArray)(
    typia.json.createAssertParse<CommentTagArray>(),
  );
