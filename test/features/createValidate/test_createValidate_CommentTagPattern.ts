import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_validate_CommentTagPattern = _test_validate(
    "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)(
    typia.createValidate<CommentTagPattern>(),
);
