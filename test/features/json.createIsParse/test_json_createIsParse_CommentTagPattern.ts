import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_json_createIsParse_CommentTagPattern = _test_json_isParse(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)(
  typia.json.createIsParse<CommentTagPattern>(),
);
