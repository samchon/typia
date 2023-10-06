import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createValidate_CommentTagNaN = _test_validate(
    "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)(typia.createValidate<CommentTagNaN>());
