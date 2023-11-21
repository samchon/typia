import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_json_createAssertStringify_CommentTagArray =
  _test_json_assertStringify("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )(typia.json.createAssertStringify<CommentTagArray>());
