import typia from "typia";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagBigInt = _test_reflect_metadata(
  "CommentTagBigInt",
)(typia.reflect.metadata<[CommentTagBigInt]>());
