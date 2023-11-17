import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_createValidateClone_CommentTagFormat =
  _test_misc_validateClone("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.misc.createValidateClone<CommentTagFormat>());
