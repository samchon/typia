import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_CommentTagPattern =
  _test_json_assertParse(TypeGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)(
    typia.json.createAssertParse<CommentTagPattern>(),
  );
