import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_assertEquals_CommentTagFormat = _test_assertEquals(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
    typia.assertEquals<CommentTagFormat>(input),
);
