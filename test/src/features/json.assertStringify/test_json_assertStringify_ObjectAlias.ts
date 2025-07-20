import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_assertStringify_ObjectAlias = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectAlias")<ObjectAlias>(
    ObjectAlias,
  )((input) => typia.json.assertStringify<ObjectAlias>(input));
