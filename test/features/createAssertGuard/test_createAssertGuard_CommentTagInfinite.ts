import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createAssertGuard_CommentTagInfinite = _test_assertGuard(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)(
    typia.createAssertGuard<CommentTagInfinite>(),
);
