import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_json_createAssertStringify_CommentTagObjectUnion =
  _test_json_assertStringify("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )(typia.json.createAssertStringify<CommentTagObjectUnion>());
