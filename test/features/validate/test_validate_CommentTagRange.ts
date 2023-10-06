import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_validate_CommentTagRange = _test_validate(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.validate<CommentTagRange>(input));
