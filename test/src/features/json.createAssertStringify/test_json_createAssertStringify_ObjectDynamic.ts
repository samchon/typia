import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_createAssertStringify_ObjectDynamic = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectDynamic")<ObjectDynamic>(
    ObjectDynamic,
  )(typia.json.createAssertStringify<ObjectDynamic>());
