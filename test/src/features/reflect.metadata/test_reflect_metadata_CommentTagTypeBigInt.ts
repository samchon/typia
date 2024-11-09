import typia from "typia";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagTypeBigInt = 
  _test_reflect_metadata("CommentTagTypeBigInt")(
    typia.reflect.metadata<[CommentTagTypeBigInt]>()
  );