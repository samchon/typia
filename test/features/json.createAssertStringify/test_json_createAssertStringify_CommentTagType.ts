import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_createAssertStringify_CommentTagType =
  _test_json_assertStringify("CommentTagType")<CommentTagType>(CommentTagType)(
    typia.json.createAssertStringify<CommentTagType>(),
  );
