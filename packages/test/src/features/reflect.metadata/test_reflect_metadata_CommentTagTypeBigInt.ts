import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_reflect_metadata_CommentTagTypeBigInt =
  _test_reflect_metadata("CommentTagTypeBigInt")(
    typia.reflect.metadata<[CommentTagTypeBigInt]>(),
  );
