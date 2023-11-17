import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_stringify_CommentTagLength = _test_json_stringify(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)((input) =>
  typia.json.stringify<CommentTagLength>(input),
);
