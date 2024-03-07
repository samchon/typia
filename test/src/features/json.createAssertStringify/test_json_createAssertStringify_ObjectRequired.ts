import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectRequired =
  _test_json_assertStringify(TypeGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(typia.json.createAssertStringify<ObjectRequired>());
