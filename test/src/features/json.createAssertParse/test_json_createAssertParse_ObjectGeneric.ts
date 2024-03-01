import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_createAssertParse_ObjectGeneric = _test_json_assertParse(
  TypeGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
  typia.json.createAssertParse<ObjectGeneric>(),
);
