import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_createAssertStringify_CommentTagLength =
  _test_json_assertStringify("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )(typia.json.createAssertStringify<CommentTagLength>());
