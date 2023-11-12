import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_reflect_metadata_CommentTagNaN = _test_reflect_metadata(
    "CommentTagNaN",
)(typia.reflect.metadata<[CommentTagNaN]>());
