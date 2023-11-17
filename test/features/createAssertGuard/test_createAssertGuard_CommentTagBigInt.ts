import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createAssertGuard_CommentTagBigInt = _test_assertGuard(
    "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)(
    typia.createAssertGuard<CommentTagBigInt>(),
);
