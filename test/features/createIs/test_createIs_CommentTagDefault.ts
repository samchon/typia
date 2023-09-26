import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createIs_CommentTagDefault = _test_is(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(typia.createIs<CommentTagDefault>());
