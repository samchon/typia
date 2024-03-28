import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_assertParse_ObjectJsonTag = _test_json_assertParse(
  TypeGuardError,
)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)((input) =>
  typia.json.assertParse<ObjectJsonTag>(input),
);
