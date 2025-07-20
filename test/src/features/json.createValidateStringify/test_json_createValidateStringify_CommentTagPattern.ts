import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_createValidateStringify_CommentTagPattern = (): void =>
  _test_json_validateStringify("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )(typia.json.createValidateStringify<CommentTagPattern>());
