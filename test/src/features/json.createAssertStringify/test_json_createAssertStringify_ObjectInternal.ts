import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_createAssertStringify_ObjectInternal =
  _test_json_assertStringify(TypeGuardError)("ObjectInternal")<ObjectInternal>(
    ObjectInternal,
  )(typia.json.createAssertStringify<ObjectInternal>());
