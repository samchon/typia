import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_createIsParse_CommentTagType = _test_json_isParse(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.json.createIsParse<CommentTagType>());
