import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_createStringify_CommentTagType = (): void =>
  _test_json_stringify("CommentTagType")<CommentTagType>(CommentTagType)(
    typia.json.createStringify<CommentTagType>(),
  );
