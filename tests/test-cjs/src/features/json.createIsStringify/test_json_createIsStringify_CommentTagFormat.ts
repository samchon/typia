import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_createIsStringify_CommentTagFormat = (): void =>
  _test_json_isStringify("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.json.createIsStringify<CommentTagFormat>());
