import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_assertStringify_ObjectInternal = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectInternal")<ObjectInternal>(
    ObjectInternal,
  )((input) => typia.json.assertStringify<ObjectInternal>(input));
