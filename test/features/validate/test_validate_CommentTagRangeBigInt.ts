import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_validate_CommentTagRangeBigInt = _test_validate(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)((input) =>
    typia.validate<CommentTagRangeBigInt>(input),
);
