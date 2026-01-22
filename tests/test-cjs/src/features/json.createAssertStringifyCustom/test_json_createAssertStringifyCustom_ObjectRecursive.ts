import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_createAssertStringifyCustom_ObjectRecursive = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ObjectRecursive",
  )<ObjectRecursive>(ObjectRecursive)(
    typia.json.createAssertStringify<ObjectRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
