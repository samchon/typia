import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssert_CommentTagFormat = _test_assert(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(typia.createAssert<CommentTagFormat>());
