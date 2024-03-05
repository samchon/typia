import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_assertParse_ObjectAlias = _test_json_assertParse(
  TypeGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)((input) =>
  typia.json.assertParse<ObjectAlias>(input),
);
