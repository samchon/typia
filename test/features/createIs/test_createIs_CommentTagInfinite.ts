import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createIs_CommentTagInfinite = _test_is(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)(typia.createIs<CommentTagInfinite>());
