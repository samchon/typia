import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_stringify_CommentTagPattern = _test_json_stringify(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.json.stringify<CommentTagPattern>(input),
);
