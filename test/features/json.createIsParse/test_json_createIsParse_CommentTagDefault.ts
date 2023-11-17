import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_createIsParse_CommentTagDefault = _test_json_isParse(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
  typia.json.createIsParse<CommentTagDefault>(),
);
