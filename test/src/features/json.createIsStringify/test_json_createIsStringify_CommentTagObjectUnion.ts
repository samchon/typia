import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_createIsStringify_CommentTagObjectUnion = (): void =>
  _test_json_isStringify("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )(typia.json.createIsStringify<CommentTagObjectUnion>());
