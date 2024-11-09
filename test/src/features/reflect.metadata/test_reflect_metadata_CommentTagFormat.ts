import typia from "typia";
import { CommentTagFormat } from "../../structures/CommentTagFormat";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagFormat = 
  _test_reflect_metadata("CommentTagFormat")(
    typia.reflect.metadata<[CommentTagFormat]>()
  );