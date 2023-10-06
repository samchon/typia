import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createValidateEquals_CommentTagTypeBigInt =
    _test_validateEquals("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
        CommentTagTypeBigInt,
    )(typia.createValidateEquals<CommentTagTypeBigInt>());
