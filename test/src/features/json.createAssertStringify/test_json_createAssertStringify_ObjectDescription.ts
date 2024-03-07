import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectDescription =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)(
    typia.json.createAssertStringify<ObjectDescription>(),
  );
