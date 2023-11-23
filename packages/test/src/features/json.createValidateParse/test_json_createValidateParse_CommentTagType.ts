import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_createValidateParse_CommentTagType =
  _test_json_validateParse("CommentTagType")<CommentTagType>(CommentTagType)(
    typia.json.createValidateParse<CommentTagType>(),
  );
