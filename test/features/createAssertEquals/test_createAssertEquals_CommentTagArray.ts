import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_assertEquals_CommentTagArray = _test_assertEquals(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)(
    typia.createAssertEquals<CommentTagArray>(),
);
