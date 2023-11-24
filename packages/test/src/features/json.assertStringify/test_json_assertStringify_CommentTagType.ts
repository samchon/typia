import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_assertStringify_CommentTagType =
  _test_json_assertStringify("CommentTagType")<CommentTagType>(CommentTagType)(
    (input) => typia.json.assertStringify<CommentTagType>(input),
  );
