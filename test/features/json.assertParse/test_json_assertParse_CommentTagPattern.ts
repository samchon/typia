import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_assertParse_CommentTagPattern = _test_json_assertParse(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.json.assertParse<CommentTagPattern>(input),
);
