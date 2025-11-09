import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createAssertStringify_ObjectGenericArray = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)(
    typia.json.createAssertStringify<ObjectGenericArray>(),
  );
