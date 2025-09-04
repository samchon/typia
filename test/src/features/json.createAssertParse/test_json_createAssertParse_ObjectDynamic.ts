import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_createAssertParse_ObjectDynamic = (): void =>
  _test_json_assertParse(TypeGuardError)("ObjectDynamic")<ObjectDynamic>(
    ObjectDynamic,
  )(typia.json.createAssertParse<ObjectDynamic>());
