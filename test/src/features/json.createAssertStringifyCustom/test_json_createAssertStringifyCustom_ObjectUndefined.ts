import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectUndefined =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectUndefined",
  )<ObjectUndefined>(ObjectUndefined)(
    typia.json.createAssertStringify<ObjectUndefined>(
      (p) => new CustomGuardError(p),
    ),
  );
