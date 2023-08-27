import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_validateEquals_CommentTagRange = _test_validateEquals(
    "CommentTagRange",
)<CommentTagRange>(CommentTagRange)(
    typia.createValidateEquals<CommentTagRange>(),
);
