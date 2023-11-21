import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createIs_CommentTagPattern = _test_is(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)(typia.createIs<CommentTagPattern>());
