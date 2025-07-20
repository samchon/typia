import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_createAssertStringify_ObjectPartial = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )(typia.json.createAssertStringify<ObjectPartial>());
