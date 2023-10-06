import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_validate_CommentTagArray = _test_validate(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
    typia.validate<CommentTagArray>(input),
);
