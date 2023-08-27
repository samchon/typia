import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_equals_CommentTagFormat = _test_equals(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(typia.createEquals<CommentTagFormat>());
