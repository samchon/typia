import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_assertStringify_ObjectTuple = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )((input) => typia.json.assertStringify<ObjectTuple>(input));
