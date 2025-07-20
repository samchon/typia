import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_createAssertStringify_ObjectDate = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectDate")<ObjectDate>(
    ObjectDate,
  )(typia.json.createAssertStringify<ObjectDate>());
