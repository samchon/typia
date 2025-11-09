import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_stringify_CommentTagType = (): void =>
  _test_json_stringify("CommentTagType")<CommentTagType>(CommentTagType)(
    (input) => typia.json.stringify<CommentTagType>(input),
  );
