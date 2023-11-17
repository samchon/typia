import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_json_assertParse_CommentTagLength = _test_json_assertParse(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)((input) =>
  typia.json.assertParse<CommentTagLength>(input),
);
