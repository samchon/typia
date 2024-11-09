import typia from "typia";
import { CommentTagLength } from "../../structures/CommentTagLength";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagLength = 
  _test_reflect_metadata("CommentTagLength")(
    typia.reflect.metadata<[CommentTagLength]>()
  );