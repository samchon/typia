import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_assertStringify_ObjectGeneric = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )((input) => typia.json.assertStringify<ObjectGeneric>(input));
