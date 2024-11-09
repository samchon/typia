import typia from "typia";
import { CommentTagType } from "../../structures/CommentTagType";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagType = 
  _test_reflect_metadata("CommentTagType")(
    typia.reflect.metadata<[CommentTagType]>()
  );