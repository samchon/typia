import typia from "typia";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_CommentTagArrayUnion = 
  _test_reflect_metadata("CommentTagArrayUnion")(
    typia.reflect.metadata<[CommentTagArrayUnion]>()
  );