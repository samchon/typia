import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_reflect_metadata_CommentTagRangeBigInt =
  _test_reflect_metadata("CommentTagRangeBigInt")(
    typia.reflect.metadata<[CommentTagRangeBigInt]>(),
  );
