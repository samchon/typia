import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_validate_CommentTagFormat = _test_validate(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(typia.createValidate<CommentTagFormat>());
