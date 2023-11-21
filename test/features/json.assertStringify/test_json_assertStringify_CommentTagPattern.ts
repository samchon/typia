import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_assertStringify_CommentTagPattern =
  _test_json_assertStringify("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )((input) => typia.json.assertStringify<CommentTagPattern>(input));
