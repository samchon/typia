import typia from "typia";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagObjectUnion = 
  _test_reflect_metadata("CommentTagObjectUnion")(
    typia.reflect.metadata<[CommentTagObjectUnion]>()
  );