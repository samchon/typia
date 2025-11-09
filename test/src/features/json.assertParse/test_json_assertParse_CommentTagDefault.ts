import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_assertParse_CommentTagDefault = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)((input) =>
    typia.json.assertParse<CommentTagDefault>(input),
  );
