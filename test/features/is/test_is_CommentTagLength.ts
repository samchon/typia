import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_is_CommentTagLength = _test_is(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)((input) =>
    typia.is<CommentTagLength>(input),
);
