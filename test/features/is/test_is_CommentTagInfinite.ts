import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_is_CommentTagInfinite = _test_is(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)((input) =>
    typia.is<CommentTagInfinite>(input),
);
