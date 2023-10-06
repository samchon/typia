import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_validate_CommentTagBigInt = _test_validate(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)((input) => typia.validate<CommentTagBigInt>(input));
