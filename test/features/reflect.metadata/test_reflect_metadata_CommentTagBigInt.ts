import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_reflect_metadata_CommentTagBigInt = _test_reflect_metadata(
  "CommentTagBigInt",
)(typia.reflect.metadata<[CommentTagBigInt]>());
