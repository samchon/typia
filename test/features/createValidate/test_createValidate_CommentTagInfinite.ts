import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createValidate_CommentTagInfinite = _test_validate(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)(
    typia.createValidate<CommentTagInfinite>(),
);
