import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_reflect_metadata_CommentTagArray = _test_reflect_metadata(
    "CommentTagArray",
)(typia.reflect.metadata<[CommentTagArray]>());
