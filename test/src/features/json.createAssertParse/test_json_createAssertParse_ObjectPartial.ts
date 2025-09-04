import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_createAssertParse_ObjectPartial = (): void =>
  _test_json_assertParse(TypeGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )(typia.json.createAssertParse<ObjectPartial>());
