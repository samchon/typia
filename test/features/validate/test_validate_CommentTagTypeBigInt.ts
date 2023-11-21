import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_validate_CommentTagTypeBigInt = _test_validate(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
  typia.validate<CommentTagTypeBigInt>(input),
);
