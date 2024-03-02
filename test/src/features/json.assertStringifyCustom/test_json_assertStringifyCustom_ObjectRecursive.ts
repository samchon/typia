import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_assertStringifyCustom_ObjectRecursive =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectRecursive",
  )<ObjectRecursive>(ObjectRecursive)((input) =>
    typia.json.assertStringify<ObjectRecursive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
