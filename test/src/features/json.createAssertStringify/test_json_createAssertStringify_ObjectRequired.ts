import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_createAssertStringify_ObjectRequired = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(typia.json.createAssertStringify<ObjectRequired>());
