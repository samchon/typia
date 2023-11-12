import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_reflect_metadata_CommentTagRange = _test_reflect_metadata(
    "CommentTagRange",
)(typia.reflect.metadata<[CommentTagRange]>());
