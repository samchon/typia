import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectTuple =
  _test_json_assertStringify(TypeGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )(typia.json.createAssertStringify<ObjectTuple>());
