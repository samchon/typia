import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_createValidateStringify_CommentTagType =
  _test_json_validateStringify("CommentTagType")<CommentTagType>(
    CommentTagType,
  )(typia.json.createValidateStringify<CommentTagType>());
